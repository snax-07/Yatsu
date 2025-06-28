"use client"

import { useEffect, useState } from "react"
import { CheckCircle, Mail, MessageCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"
import AnimatedBackground from "@/components/animated-background-form"

export default function ConfirmationPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-[#0E0E11] relative overflow-hidden flex items-center justify-center">
      <AnimatedBackground />

      <div className="relative z-10 container mx-auto px-4">
        <div
          className={`max-w-2xl mx-auto text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Success Icon */}
          <div className="mb-8">
            <CheckCircle className="w-24 h-24 text-[#D4FF00] mx-auto animate-pulse" />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold font-orbitron text-white mb-6 glow-text">
            Form Submitted Successfully!
          </h1>

          {/* Message */}
          <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 glow-border mb-8">
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-4 text-[#FF4D00]">
                <Mail className="w-6 h-6" />
                <span className="text-lg font-semibold">Processing Your Application</span>
              </div>

              <p className="text-xl text-gray-300 leading-relaxed">
                Your form has been received and is under processing.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-center space-x-3 text-[#D4FF00]">
                  <Mail className="w-5 h-5" />
                  <span>Email response within 24 hours</span>
                </div>
                <div className="flex items-center space-x-3 text-[#D4FF00]">
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp updates</span>
                </div>
              </div>

              <p className="text-lg text-gray-300 mt-6">Stay tuned on your email and WhatsApp for updates.</p>
            </div>
          </div>

          {/* Back to Home */}
          <Link
            href="/"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-[#FF4D00] to-[#D4FF00] text-black font-bold rounded-full hover:scale-105 transition-all duration-300 glow-button"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>

          {/* Additional Info */}
          <div className="mt-12 text-gray-400">
            <p className="text-sm">Welcome to the YÄ~TSU Squad community! 🚀</p>
          </div>
        </div>
      </div>
    </div>
  )
}
