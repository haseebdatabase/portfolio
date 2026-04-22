import { Metadata } from 'next'

export const siteConfig = {
  name: 'Haseeb Ullah Portfolio',
  description: 'Personal portfolio and blog of a Cyber Security Specialist & Networking Expert',
  url: 'https://haseebullah.me',
  ogImage: '/og-image.jpg',
  links: {
    github: 'https://github.com/HaseebUllah312',
  },
}

export const defaultMetadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [{ name: 'Haseeb Ullah' }],
  creator: 'Haseeb Ullah',
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@HaseebUllah312',
  },
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
  },
  manifest: '/site.webmanifest',
}
