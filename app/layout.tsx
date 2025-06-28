import type React from "react"
import type { Metadata } from "next"
import { Orbitron, Audiowide, Quantico } from "next/font/google"
import "./globals.css"

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
})

const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-audiowide",
})

const quantico = Quantico({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-quantico",
})

export const metadata: Metadata = {
  title: "YÄ~TSU SQUAD - Build. Connect. Grow.",
  description: "Join the futuristic tech community. We Build. We Solve. We Ship.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${orbitron.variable} ${audiowide.variable} ${quantico.variable} bg-black text-white overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  )
}
