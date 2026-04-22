export interface ProjectStats {
  [key: string]: string | number
}

export interface Project {
  title: string
  description: string
  image: string
  longDescription: string
  tags: string[]
  github?: string
  huggingface?: string
  liveDemo?: string
  isPrivate?: boolean
  stats: ProjectStats
}

export const projects: Project[] = [
  {
    title: "HM nexora",
    description: "The ultimate academic hub for VU students, featuring AI-powered study tools, past papers, and professional LMS handling.",
    image: "/projects/hmnexora.png",
    longDescription: "HM nexora is a professional academic platform specifically designed for Virtual University (VU) students. It centralizes essential academic resources including 370+ subjects past papers, short notes, and AI-driven tools like the MCQ Practice engine and Semester Planner. With a 24/7 AI Mentor and professional LMS handling services, it provides a seamless learning experience for modern students.",
    tags: ["Next.js", "AI Integration", "Academic Tools", "PWA", "VU Students"],
    liveDemo: "https://www.hmnexora.tech",
    isPrivate: true,
    stats: {
      subjects: "370+",
      users: "Active",
      support: "24/7"
    }
  },
  {
    title: "Nexora WhatsApp Bot",
    description: "Personal media command center—download files, convert stickers, and save social media content instantly. (Contact: 03177180123)",
    image: "/projects/HM Nexora bot.png",
    longDescription: "Built with Node.js and the WhatsApp API, this bot serves as an automated digital assistant for students. It acts as a personal media command center enabling users to request academic materials, check semester status, download and convert files and stickers, and receive important updates. For bot services and demos, reach out at 03037180123. For other inquiries, contact my primary number: 03177180123.",
    tags: ["Node.js", "WhatsApp API", "Automation", "Bot Development", "Server-Side"],
    liveDemo: "https://wa.me/923037180123",
    isPrivate: true,
    stats: {
      platform: "WhatsApp",
      responses: "Instant",
      uptime: "99.9%"
    }
  },
  {
    title: "HM Nexora LMS Pro — Owner Edition",
    description: "A premium mission control dashboard for managing students, teams, and academic revenue with real-time sync.",
    image: "/projects/nexoralms_pro.png",
    longDescription: "The Elite Edition of HM Nexora LMS is a comprehensive owner dashboard providing a global radar over an academic institution. It features a Client Manager, Grade Predictor, Bulk Tracker, Daily Agenda, and real-time activity performance syncing. Built for scalability and high-level mission control of educational metrics and revenue.",
    tags: ["LMS", "React", "Dashboard", "Real-time Sync", "Management"],
    liveDemo: "https://nexoralms1.vercel.app",
    isPrivate: true,
    stats: {
      sync: "Real-time",
      ux: "Premium",
      status: "Active"
    }
  },
  {
    title: "Student Management System",
    description: "A comprehensive student management system for educational institutions to manage student data, courses, and academic records.",
    image: "/projects/Student management system.png",
    longDescription: "A full-stack student management system that allows institutions to efficiently manage student records, course enrollment, grades, and attendance. Built with modern web technologies for scalability and user-friendly interface.",
    tags: ["Student Management", "Full-Stack", "Database", "Admin Panel"],
    github: "https://github.com/HaseebUllah312/Student-management-system",
    liveDemo: "https://studentmanagementsystem-nu.vercel.app/login",
    stats: {
      users: "100+",
      institutions: "5+",
      status: "Active"
    }
  },
  {
    title: "Secure Expense Tracker",
    description: "A secure and encrypted expense tracking application for personal financial management.",
    image: "/projects/Secure Expense Tracker.png",
    longDescription: "A full-featured expense tracker application with security at its core. Users can securely log, categorize, and analyze their expenses. Features include encryption, data backup, detailed reports, and budget tracking with an intuitive dashboard.",
    tags: ["Expense Tracking", "Security", "Encryption", "Financial App"],
    github: "https://github.com/HaseebUllah312/secure_expense_tracker",
    liveDemo: "https://secureexpensetracker1.vercel.app/login",
    stats: {
      security: "Bank-grade",
      transactions: "Unlimited",
      reports: "Advanced"
    }
  },
  {
    title: "Professional Portfolio",
    description: "A professional personal portfolio showcasing Software Engineering, Cyber Security, and CCTV Specialist expertise.",
    image: "/projects/Haseeb Portfolio.png",
    longDescription: "A modern, high-end portfolio website built with Next.js and Tailwind CSS. It highlights a unique blend of Software Engineering, advanced Networking, and professional CCTV installation services, all while maintaining a strong focus on Cyber Security principles. **(Private Repository: Contact the owner for access)**",
    tags: ["Next.js", "Cyber Security", "CCTV Specialist", "Professional Networking"],
    liveDemo: "https://haseebullah.me",
    isPrivate: true,
    stats: {
      projects: "10+",
      security: "Hardened",
      status: "Live"
    }
  }
]