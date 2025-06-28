"use client"

import { useEffect, useState } from "react"

interface FloatingIcon {
  id: number
  x: number
  y: number
  size: number
  speed: number
  opacity: number
}

export default function AnimatedBackgroundForm() {
  const [icons, setIcons] = useState<FloatingIcon[]>([])

  useEffect(() => {
    const generateIcons = () => {
      const newIcons: FloatingIcon[] = []
      for (let i = 0; i < 15; i++) {
        newIcons.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 20 + 10,
          speed: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.3 + 0.1,
        })
      }
      setIcons(newIcons)
    }

    generateIcons()
    window.addEventListener("resize", generateIcons)
    return () => window.removeEventListener("resize", generateIcons)
  }, [])

  useEffect(() => {
    const animateIcons = () => {
      setIcons((prevIcons) =>
        prevIcons.map((icon) => ({
          ...icon,
          y: icon.y <= -50 ? window.innerHeight + 50 : icon.y - icon.speed,
          x: icon.x + Math.sin(icon.y * 0.01) * 0.5,
        })),
      )
    }

    const interval = setInterval(animateIcons, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Pixel Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 77, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 77, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            animation: "pixelMove 20s linear infinite",
          }}
        />
      </div>

      {/* Floating + Icons */}
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="absolute text-[#D4FF00] font-bold select-none"
          style={{
            left: `${icon.x}px`,
            top: `${icon.y}px`,
            fontSize: `${icon.size}px`,
            opacity: icon.opacity,
            transform: "translate(-50%, -50%)",
          }}
        >
          +
        </div>
      ))}

      <style jsx>{`
        @keyframes pixelMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </div>
  )
}
