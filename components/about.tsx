"use client"

import { useEffect, useRef } from "react"
import { Code, Users, Zap, Globe, Trophy, Rocket } from "lucide-react"

const features = [
  { icon: Code, title: "Cutting-edge Tech", description: "Latest technologies and frameworks" },
  { icon: Users, title: "Community Driven", description: "Collaborative learning environment" },
  { icon: Zap, title: "Fast Innovation", description: "Rapid prototyping and development" },
  { icon: Globe, title: "Global Network", description: "Connect with developers worldwide" },
  { icon: Trophy, title: "Skill Building", description: "Enhance your technical abilities" },
  { icon: Rocket, title: "Launch Projects", description: "Turn ideas into reality" },
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="min-h-screen py-20 px-4 lg:px-8 relative bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center fade-in">
          {/* Left Column */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold text-white neon-glow animate-on-scroll">
              About YÄ~TSU Squad
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed animate-on-scroll">
              YÄ~TSU Squad is a cutting-edge tech community where innovation meets collaboration. We're passionate
              developers, designers, and tech enthusiasts building the future through code, creativity, and community.
            </p>

            <div className="grid grid-cols-2 gap-4 animate-on-scroll">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="p-4 bg-gray-900/50 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300 group backdrop-blur-sm hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Icon className="text-cyan-400 mb-2 group-hover:text-cyan-300" size={24} />
                    <h3 className="text-white font-semibold text-sm">{feature.title}</h3>
                    <p className="text-gray-400 text-xs mt-1">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex justify-center animate-on-scroll">
            <div className="relative p-8 bg-gray-900/30 rounded-2xl border border-cyan-400 neon-border backdrop-blur-sm hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-400/30">
              <div className="text-center space-y-4">
                <div className="w-36 h-36 mx-auto bg-gradient-to-br from-cyan-500/20 to-red-500/20 rounded-full flex items-center justify-center relative overflow-hidden floating-robot-container">
                  <img
                    src="/placeholder-logo.svg"
                    alt="YÄ~TSU Squad Logo"
                    className="w-24 h-24 object-contain filter drop-shadow-lg floating-robot"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-cyan-500/10 to-transparent"></div>
                </div>
                <h3 className="text-2xl font-bold text-cyan-400 neon-glow">Ready to Launch?</h3>
                <p className="text-gray-300">
                  Meet our AI assistant! Join our mission to build innovative solutions and shape the future of
                  technology with our intelligent community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
