"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const tools = [
  {
    name: "Python",
    emoji: "🐍",
    category: "Programming Language"
  },
  {
    name: "Java",
    emoji: "☕",
    category: "Programming Language"
  },
  {
    name: "C++",
    emoji: "📘",
    category: "Programming Language"
  },
  {
    name: "JavaScript",
    emoji: "🟨",
    category: "Programming Language"
  },
  {
    name: "TypeScript",
    emoji: "🔷",
    category: "Programming Language"
  },
  {
    name: "HTML & CSS",
    emoji: "🧱",
    category: "Web Development"
  },
  {
    name: "React",
    emoji: "⚛️",
    category: "Frontend Framework"
  },
  {
    name: "Next.js",
    emoji: "⏭️",
    category: "Full-Stack Framework"
  },
  {
    name: "Node.js",
    emoji: "🟢",
    category: "Backend Runtime"
  },
  {
    name: "SQL",
    emoji: "💾",
    category: "Database"
  },
  {
    name: "MongoDB",
    emoji: "🍃",
    category: "Database"
  },
  {
    name: "Git",
    emoji: "🔧",
    category: "Version Control"
  },
  {
    name: "GitHub",
    emoji: "🐱",
    category: "Code Hosting"
  },
  {
    name: "Docker",
    emoji: "🐳",
    category: "DevOps"
  },
  {
    name: "Linux",
    emoji: "🐧",
    category: "Operating System"
  },
  {
    name: "VS Code",
    emoji: "🧩",
    category: "IDE / Editor"
  },
  {
    name: "Advanced Networking",
    emoji: "🌐",
    category: "Computer Networks"
  },
  {
    name: "Cybersecurity",
    emoji: "🛡️",
    category: "Security"
  },
  {
    name: "WordPress",
    emoji: "📝",
    category: "CMS"
  },
  {
    name: "Penetration Testing",
    emoji: "🕵️",
    category: "Security"
  },
  {
    name: "Wireshark",
    emoji: "🦈",
    category: "Networking Tool"
  },
  {
    name: "Practical Help Desk",
    emoji: "🎧",
    category: "IT Support"
  },
  {
    name: "CCTV Installation",
    emoji: "📹",
    category: "Physical Security"
  },
  {
    name: "OOP & DSA",
    emoji: "📚",
    category: "CS Fundamentals"
  },
  {
    name: "Android / App Dev",
    emoji: "📱",
    category: "Mobile Development"
  }
]

export function ToolsGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {tools.map((tool, index) => (
        <motion.div
          key={tool.name}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          viewport={{ once: true }}
        >
          <Card className="group overflow-hidden border-none bg-background/50 transition-colors hover:bg-accent">
            <CardContent className="flex flex-col items-center justify-center p-4 text-center">
              <span className="text-4xl mb-2" role="img" aria-label={tool.name}>
                {tool.emoji}
              </span>
              <h3 className="text-sm font-medium">{tool.name}</h3>
              <p className="text-xs text-muted-foreground mt-0.5">{tool.category}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

