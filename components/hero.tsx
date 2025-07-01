"use client"

import { ChevronDown, Menu } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Hero() {
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleRegisterClick = () => {
    router.push("/register")
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "tracks", label: "Tracks" },
    { id: "team", label: "Team" },
    { id: "faq", label: "FAQ" },
    { id: "footer", label: "Contact" },
  ]

  return (
    <section id="hero" className="min-h-screen flex flex-col relative px-4">
      {/* Mobile Navigation */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-xl font-bold text-white font-orbitron">YÄ~TSU</h1>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="bg-black/95 backdrop-blur-sm border-t border-gray-700">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-white hover:bg-gray-800 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={handleRegisterClick}
              className="block w-full text-left px-4 py-3 text-orange-500 hover:bg-gray-800 transition-colors font-semibold"
            >
              Register
            </button>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center pt-20 lg:pt-0">
        <div className="text-center space-y-8 fade-in">
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold font-quantico text-white grow-animation">
            YÄ~TSU SQUAD
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-audiowide text-red-500">
            We Build. We Solve. We Ship.
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Build. Connect. Grow with YÄ~TSU Squad.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <button
              onClick={handleRegisterClick}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-red-500 text-black font-bold rounded-full neon-button hover:bg-red-400 transition-all duration-300 text-base sm:text-lg cursor-pointer w-full sm:w-auto"
            >
              REGISTER NOW
            </button>

            <button
              onClick={() => window.open('https://linktr.ee/yatsusqad', '_blank')}
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-full neon-button hover:bg-cyan-400 hover:text-black transition-all duration-300 text-base sm:text-lg w-full sm:w-auto"
            >
              JOIN OUR COMMUNITY
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-red-500 bounce cursor-pointer hover:text-red-400 transition-colors"
      >
        <ChevronDown size={40} className="neon-glow" />
      </button>
    </section>
  )
}
