"use client"

import { Mail, Instagram, Twitter, Linkedin } from "lucide-react"
import { useRouter } from "next/navigation"

const socialLinks = [
  { icon: Mail, label: "Email", value: "yatsu025@gmail.com", href: "mailto:yatsu025@gmail.com" },
  { icon: Instagram, label: "Instagram", value: "official_yatsu", href: "https://www.instagram.com/official_yatsu" },
  { icon: Twitter, label: "Twitter", value: "@yatsu_4", href: "https://x.com/yatsu_4" },
  { icon: Linkedin, label: "LinkedIn", value: "ya~tsu-squad", href: "https://www.linkedin.com/company/ya-tsu-squad/" },
]

export default function Footer() {
  const router = useRouter()

  const handleRegisterClick = () => {
    router.push("/register")
  }

  return (
    <footer id="footer" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Main CTA Section */}
        <div className="text-center mb-16 space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold text-white neon-glow slide-up">
            Become a Part of YÄ~TSU Squad
          </h2>

          <p className="text-xl text-gray-300 slide-up">
            Join our community of innovators and builders shaping the future of technology.
          </p>

          <button
            onClick={handleRegisterClick}
            className="px-12 py-4 bg-orange-500 text-black font-bold rounded-full neon-button hover:bg-orange-400 transition-all duration-300 text-xl slide-up cursor-pointer"
          >
            REGISTER NOW
          </button>
        </div>

        {/* Contact & Socials */}
        <div className="text-center space-y-8">
          <h3 className="text-2xl font-bold text-turquoise-400 neon-glow">Contact & Socials</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <a
                  key={index}
                  href={link.href}
                  className="flex items-center space-x-3 p-4 bg-gray-900/50 rounded-lg border border-gray-700 hover:border-turquoise-400 transition-all duration-300 group"
                >
                  <Icon className="text-turquoise-400 group-hover:text-turquoise-300" size={24} />
                  <div className="text-left">
                    <div className="text-sm text-gray-400">{link.label}</div>
                    <div className="text-white font-medium">{link.value}</div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-400">© 2025 YÄ~TSU Squad. Built with ❤️ for the tech community.</p>
        </div>
      </div>
    </footer>
  )
}
