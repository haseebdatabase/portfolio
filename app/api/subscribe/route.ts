import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

export async function POST(req: Request) {
  const { email } = await req.json()

  if (!email || !email.length) {
    return NextResponse.json(
      { error: 'Please enter a valid email address' },
      { status: 400 }
    )
  }

  try {
    const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY
    const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID
    const MAILCHIMP_API_SERVER = process.env.MAILCHIMP_API_SERVER

    if (process.env.VERCEL) {
      return NextResponse.json(
        { message: 'Successfully subscribed to the newsletter!' },
        { status: 201 }
      )
    }

    if (!MAILCHIMP_API_KEY || !MAILCHIMP_LIST_ID || !MAILCHIMP_API_SERVER) {
      // Option 1: Save to local file
      const filePath = path.join(process.cwd(), 'subscriptions.txt')
      const entry = `${new Date().toISOString()} - ${email}\n`
      
      try {
        await fs.appendFile(filePath, entry)
      } catch (err) {
        console.error('Failed to save subscription:', err)
      }

      return NextResponse.json(
        { message: 'Successfully subscribed to the newsletter!' },
        { status: 201 }
      )
    }

    const data = {
      email_address: email,
      status: 'subscribed',
    }

    const response = await fetch(
      `https://${MAILCHIMP_API_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`,
      {
        body: JSON.stringify(data),
        headers: {
          Authorization: `apikey ${MAILCHIMP_API_KEY}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
      }
    )

    const responseData = await response.json()

    if (!response.ok) {
      // Handle different Mailchimp error cases
      if (responseData.title === 'Member Exists') {
        return NextResponse.json(
          { error: 'You are already subscribed to the newsletter!' },
          { status: 400 }
        )
      }
      
      return NextResponse.json(
        { error: responseData.detail },
        { status: response.status }
      )
    }

    return NextResponse.json(
      { message: 'Successfully subscribed to the newsletter!' },
      { status: 201 }
    )
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'There was an error subscribing to the newsletter.' },
      { status: 500 }
    )
  }
}