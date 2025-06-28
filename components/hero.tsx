"use client"

import { ChevronDown } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Hero() {
  const router = useRouter()

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleRegisterClick = () => {
    router.push("/register")
  }

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative px-4">
      <div className="text-center space-y-8 fade-in">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-quantico text-white grow-animation">
          YÄ~TSU SQUAD
        </h1>

        <h2 className="text-2xl md:text-4xl lg:text-5xl font-audiowide text-red-500">We Build. We Solve. We Ship.</h2>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">Build. Connect. Grow with YÄ~TSU Squad.</p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
          <button
            onClick={handleRegisterClick}
            className="px-8 py-4 bg-red-500 text-black font-bold rounded-full neon-button hover:bg-red-400 transition-all duration-300 text-lg cursor-pointer"
          >
            REGISTER NOW
          </button>

          <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-full neon-button hover:bg-cyan-400 hover:text-black transition-all duration-300 text-lg">
            JOIN OUR COMMUNITY
          </button>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 text-red-500 bounce cursor-pointer hover:text-red-400 transition-colors"
      >
        <ChevronDown size={40} className="neon-glow" />
      </button>
    </section>
  )
}
