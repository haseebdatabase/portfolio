"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X, Download } from "lucide-react"
import { certificates } from "@/components/data/certificates"
import Image from "next/image"

export function CertificatesGrid() {
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null)

  const handlePdfClick = (certificate: any) => {
    if (certificate.pdf) {
      window.open(certificate.pdf, "_blank", "noopener,noreferrer")
    }
  }

  const openCertificateModal = (certificate: any) => {
    setSelectedCertificate(certificate)
  }

  const closeCertificateModal = () => {
    setSelectedCertificate(null)
  }

  return (
    <>
      {/* Certificates Grid */}
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
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-4">
              Professional Certificates
            </h2>
            <p className="text-muted-foreground md:text-lg max-w-[800px] mx-auto px-4">
					Industry-recognized certifications in software development, computer science, and related technologies
            </p>
          </motion.div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((certificate, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => openCertificateModal(certificate)}
              >
                <div className="relative h-80 bg-white dark:bg-slate-900 rounded-lg shadow-lg overflow-hidden border border-border hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  
                  {certificate.image ? (
                    /* Certificate Image Display */
                    <>
                      <div className="absolute inset-0">
                        <Image
                          src={certificate.image}
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

                      {/* Click to View Overlay */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 text-sm font-medium text-slate-900">
                          Click to view full certificate
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
                              <pattern id={`grid-${index}`} width="10" height="10" patternUnits="userSpaceOnUse">
                                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                              </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill={`url(#grid-${index})`} />
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

                        {/* Click to View Overlay */}
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                          <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 text-sm font-medium text-slate-900">
                            Click to view full certificate
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCertificateModal}
          >
            <motion.div
              className="relative bg-white dark:bg-slate-900 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-foreground line-clamp-2">
                    {selectedCertificate.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Verified Certificate</span>
                  </div>
                </div>
                <button
                  onClick={closeCertificateModal}
                  className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Certificate Display */}
              <div className="relative h-[70vh] bg-slate-50 dark:bg-slate-800">
                {selectedCertificate.image ? (
                  <Image
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-foreground mb-2">{selectedCertificate.title}</h4>
                      <p className="text-muted-foreground">Professional Certification</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between p-4 border-t border-border">
                <div className="text-sm text-muted-foreground">
                  Click outside to close
                </div>
                <div className="flex gap-2">
                  {selectedCertificate.pdf && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handlePdfClick(selectedCertificate)}
                      className="gap-2"
                    >
                      <Download className="h-4 w-4" />
                      View PDF
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
