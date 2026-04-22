"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { certificates } from "@/components/data/certificates"
import Image from "next/image"

export function CertificatesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [hoveredCertIndex, setHoveredCertIndex] = useState<number | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const getCardsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) return 1 // Mobile: 1 card
      if (window.innerWidth < 1024) return 2 // Tablet: 2 cards
      return 3 // Desktop: 3 cards
    }
    return 3
  }

  const [cardsPerView, setCardsPerView] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView())
    }

    handleResize() // Set initial value
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const startAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      if (!isHovering && hoveredCertIndex === null) {
        nextSlide()
      }
    }, 5000) // Slower: 5 seconds instead of 3
  }

  useEffect(() => {
    startAutoScroll()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isHovering, hoveredCertIndex, cardsPerView])

  const getPages = () => Math.ceil(certificates.length / cardsPerView)

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const pages = getPages()
      const next = (prev + 1) % pages
      if (next === 0) {
        // wrapped, restart timer to prevent blank frame
        startAutoScroll()
      }
      return next
    })
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const pages = getPages()
      return prev === 0 ? pages - 1 : prev - 1
    })
  }

  const handlePdfClick = (certificate: any) => {
    if (certificate.pdf) {
      window.open(certificate.pdf, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <section className="py-16 md:py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
            Certifications
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-4">Professional Certificates</h2>
          <p className="text-muted-foreground md:text-lg max-w-[800px] mx-auto px-4">
            Industry-recognized certifications in AI, Computer Science, and Software Engineering.
          </p>
        </motion.div>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => {
            setIsHovering(false)
            setHoveredCertIndex(null)
          }}
        >
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Certificates Grid */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(certificates.length / cardsPerView) }).map((_, slideIdx) => (
              <div key={slideIdx} className="flex-none w-full shrink-0">
                <div className={`grid gap-4 ${cardsPerView === 1 ? 'grid-cols-1' : cardsPerView === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
                  {certificates
                    .slice(slideIdx * cardsPerView, slideIdx * cardsPerView + cardsPerView)
                    .map((certificate, index) => {
                      const globalIdx = slideIdx * cardsPerView + index;
                      return (
                        <motion.div
                          key={globalIdx}
                                                      onMouseEnter={() => {
                              setHoveredCertIndex(globalIdx);
                              setIsHovering(true);
                              if (intervalRef.current) clearInterval(intervalRef.current);
                            }}
                            onMouseLeave={() => {
                              setHoveredCertIndex(null);
                              setIsHovering(false);
                              startAutoScroll();
                            }}
                        >
                          <div className="relative cursor-pointer">
                            {/* Certificate Card Design */}
                            <div className="relative h-80 bg-white dark:bg-slate-900 rounded-lg shadow-lg overflow-hidden border border-border">
                              {certificate.image ? (
                                /* Certificate Image Display */
                                <>
                                  <div className="absolute inset-0">
                                    <Image
                                      src={certificate.image || "/placeholder.svg"}
                                      alt={certificate.title}
                                      fill
                                      className="object-cover"
                                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                  </div>

                                  {/* Certificate Badge */}
                                  <div className="absolute top-3 left-3 z-10">
                                    <div className="bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-xs font-medium shadow-lg border border-white/20">
                                      🏆 Verified Certificate
                                    </div>
                                  </div>

                                  {/* Certificate Info Overlay */}
                                  <div className="absolute bottom-0 left-0 right-0 z-10 p-3">
                                    <div className="bg-[#020828]/80 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                                      <div className="flex items-center justify-between">
                                        <div className="flex-1 min-w-0">
                                          <h3 className="text-white font-semibold text-sm leading-tight line-clamp-2 mb-1">
                                            {certificate.title}
                                          </h3>
                                          <div className="flex items-center gap-2 text-xs text-green-400">
                                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                            <span>Verified Certificate</span>
                                          </div>
                                        </div>
                                        {certificate.pdf && (
                                          <button
                                            onClick={(e) => {
                                              e.stopPropagation()
                                              handlePdfClick(certificate)
                                            }}
                                            className="ml-2 p-1.5 bg-white/20 hover:bg-white/30 rounded-md transition-colors"
                                            title="View Full Certificate"
                                          >
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                              <path
                                                fillRule="evenodd"
                                                d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                                                clipRule="evenodd"
                                              />
                                            </svg>
                                          </button>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </>
                              ) : (
                                /* Fallback Card Design for certificates without images */
                                <>
                                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-800 dark:via-blue-900 dark:to-indigo-900">
                                    {/* Certificate Background Pattern */}
                                    <div className="absolute inset-0 opacity-10">
                                      <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                                          </pattern>
                                        </defs>
                                        <rect width="100%" height="100%" fill="url(#grid)" />
                                      </svg>
                                    </div>

                                    {/* Certificate Content */}
                                    <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center">
                                      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                        <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                          <path
                                            fillRule="evenodd"
                                            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                          />
                                        </svg>
                                      </div>

                                      <div className="space-y-2">
                                        <h3 className="font-bold text-lg leading-tight line-clamp-3" style={{ color: "#020817" }}>
                                          {certificate.title}
                                        </h3>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm">Professional Certification</p>
                                        <div className="flex items-center justify-center gap-2 text-xs text-green-600 dark:text-green-400">
                                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                          <span>Verified & Authentic</span>
                                        </div>
                                      </div>
                                    </div>

                                    {/* Certificate Badge */}
                                    <div className="absolute top-3 left-3 z-10">
                                      <div className="bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-xs font-medium shadow-lg border border-white/20">
                                        🏆 Verified Certificate
                                      </div>
                                    </div>
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: getPages() }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
