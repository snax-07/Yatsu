"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const tracks = [
  {
    title: "Web Development",
    subtitle: "Frontend & Backend Technologies",
    description: "Master modern web technologies including React, Next.js, Node.js, and full-stack development.",
    image: "/placeholder.svg?height=200&width=300&text=React+Next.js",
    icon: "💻",
    color: "border-red-500",
    bgGradient: "from-red-500/10 to-pink-500/10",
  },
  {
    title: "Data Science",
    subtitle: "Analytics & Machine Learning",
    description: "Dive into data analysis, machine learning algorithms, and AI-powered solutions.",
    image: "/placeholder.svg?height=200&width=300&text=Python+Analytics",
    icon: "📊",
    color: "border-cyan-400",
    bgGradient: "from-cyan-400/10 to-blue-500/10",
  },
  {
    title: "AI & Machine Learning",
    subtitle: "Artificial Intelligence",
    description: "Explore neural networks, deep learning, and cutting-edge AI technologies.",
    image: "/placeholder.svg?height=200&width=300&text=TensorFlow+AI",
    icon: "🤖",
    color: "border-green-500",
    bgGradient: "from-green-500/10 to-emerald-500/10",
  },
  {
    title: "Blockchain",
    subtitle: "Decentralized Technologies",
    description: "Build smart contracts, DApps, and explore the world of cryptocurrency.",
    image: "/placeholder.svg?height=200&width=300&text=Ethereum+Web3",
    icon: "⛓️",
    color: "border-yellow-500",
    bgGradient: "from-yellow-500/10 to-orange-500/10",
  },
  {
    title: "Cybersecurity",
    subtitle: "Ethical Hacking & Security",
    description: "Learn penetration testing, network security, and protect digital infrastructure.",
    image: "/placeholder.svg?height=200&width=300&text=Security+Hacking",
    icon: "🔒",
    color: "border-red-400",
    bgGradient: "from-red-400/10 to-rose-500/10",
  },
  {
    title: "Game Development",
    subtitle: "Interactive Entertainment",
    description: "Create immersive games using Unity, Unreal Engine, and modern game frameworks.",
    image: "/placeholder.svg?height=200&width=300&text=Unity+Games",
    icon: "🎮",
    color: "border-pink-500",
    bgGradient: "from-pink-500/10 to-purple-500/10",
  },
]

export default function TechTracks() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % tracks.length)
    }, 2000) // Change slide every 2 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % tracks.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + tracks.length) % tracks.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section id="tracks" className="py-20 px-4 bg-[#0F0F0F] min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white font-orbitron">Our Tech Tracks</h2>
          <p className="text-xl text-gray-300 mt-4">Choose your path to technological mastery</p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-cyan-400 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Carousel Container - Only this area pauses auto-play on hover */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-gray-600"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-gray-600"
          >
            <ChevronRight size={24} />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {tracks.map((track, index) => (
                <div key={index} className="w-full flex-shrink-0 flex justify-center px-4">
                  <div
                    className={`w-80 md:w-96 h-80 relative rounded-2xl overflow-hidden border-2 ${track.color} hover:scale-105 transition-all duration-300 group cursor-pointer backdrop-blur-sm bg-gray-900/50`}
                  >
                    {/* Subtle Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${track.bgGradient} opacity-50`}></div>

                    {/* Icon Badge */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-black/70 rounded-full flex items-center justify-center text-2xl backdrop-blur-sm border border-gray-600">
                      {track.icon}
                    </div>

                    {/* Image */}
                    <div className="h-36 overflow-hidden relative">
                      <img
                        src={track.image || "/placeholder.svg"}
                        alt={track.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6 h-44 flex flex-col relative z-10">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 font-audiowide">{track.title}</h3>
                      <p className="text-cyan-400 text-sm mb-3 font-orbitron font-semibold">{track.subtitle}</p>
                      <p className="text-gray-300 text-sm flex-grow leading-relaxed">{track.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {tracks.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-cyan-400" : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}