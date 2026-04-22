"use client"

import Image from "next/image"

export function ThemeAwareLogo() {
  return (
    <Image
      src="/images/logo.png"
      alt="Website Logo"
      width={48}
      height={48}
      className="h-12 w-12 md:h-14 md:w-14 object-contain transition-opacity duration-300"
      priority
    />
  )
}





