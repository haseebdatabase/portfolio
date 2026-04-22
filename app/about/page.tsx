"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Award, Briefcase } from 'lucide-react'
import { SocialLinks } from "@/components/social-links"
import { CertificatesGrid } from "@/components/certificates-grid"

const achievements = [
  {
    icon: Award,
    title: "Education & Training",
    items: [
      "• 3-Month Intensive Cyber Security Certification (In Progress)",
      "• Advanced Networking & Infrastructure Design Training",
      "• Professional CCTV installation and Surveillance Training",
      "• WordPress Development & Customization Specialization"
    ]
  },
  {
    icon: Briefcase,
    title: "Experience",
    items: [
      "• Software Engineer & Web Developer (2019–Present)\nDesigning and implementing secure, responsive websites and custom software solutions specialized in WordPress.",
      "• CCTV & Security Systems Specialist\nProfessional installation, configuration, and maintenance of surveillance systems for residential and commercial clients.",
      "• Freelance Networking Specialist\nDesigning and securing network infrastructures, optimizing connectivity, and ensuring data integrity."
    ]
  }
]
const skills = [
  "Cybersecurity",
  "Network Security",
  "Advanced Networking",
  "WordPress Development",
  "Penetration Testing",
  "Ethical Hacking",
  "System Administration",
  "Cloud Security",
  "Firewall Management",
  "CCTV & Surveillance",
  "Practical Help Desk",
  "IT Support Specialist",
  "Hardware Maintenance",
  "TCP/IP Protocols"
]

export default function AboutPage() {
  return (
    <div className="container px-4 md:px-6 py-8 md:py-12">
      <div className="grid gap-8 md:gap-12 lg:grid-cols-[280px_1fr]">
        {/* Left Column - Profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Profile Image */}
          <div className="relative mx-auto w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full overflow-hidden">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary-foreground/20 animate-pulse" />
            <Image
              src="/images/about-page.jpg"
              alt="Profile"
              width={200}
              height={200}
              className="h-full w-full object-cover rounded-full border-4 border-background relative z-10"
              priority
            />
          </div>

          {/* Social Links */}
          <Card>
            <CardContent className="p-6">
              <SocialLinks />
            </CardContent>
          </Card>

          {/* Skills */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-primary/10">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Right Column - Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
            <p className="text-xl text-muted-foreground text-justify leading-relaxed">
            Hello! I&apos;m Haseeb Ullah, a Software Engineer and Security Systems Expert. I specialize in developing secure digital solutions and professional CCTV surveillance installations, bridging the gap between digital code and physical security.
            </p>
            <p className="text-muted-foreground text-justify leading-relaxed">
              My journey in tech is driven by a foundation in software engineering and a deep expertise in networking and hardware. From configuring complex network infrastructures to installing enterprise-grade CCTV systems, I ensure that security is maintained at every level—both online and on-site. I am currently enhancing my skills further with an intensive course in Cyber Security.
            </p>
            <p className="text-muted-foreground text-justify leading-relaxed">
              With experience in WordPress development and advanced networking, I am building a well-rounded skill set that allows me to approach problems from both a developer's and a security professional's perspective.
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {achievements.map((achievement) => (
              <Card key={achievement.title}>
                <CardContent className="p-6">
                  <achievement.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-4">{achievement.title}</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {achievement.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Certificates Section */}
      <CertificatesGrid />

      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-8"
        >
          {/* Call to Action */}
          <Card className="bg-primary/10 border-none">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Interested in collaboration?</h3>
              <p className="text-muted-foreground">Let&apos;s work together on your next software or CS project.</p>
                </div>
                <Button asChild>
                  <Link href="mailto:haseebsaleem312@gmail.com">Get in Touch</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
