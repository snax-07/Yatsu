"use client"

import { useState, useEffect } from "react"
import { Home, User, Target, Users, HelpCircle, ChevronDown } from "lucide-react"
import { useRouter } from "next/navigation"

type NavItem = {
  id: string
  icon: React.ElementType
  label: string
  isRegister?: boolean
}

const navItems: NavItem[] = [
  { id: "hero", icon: Home, label: "Home" },
  { id: "about", icon: User, label: "About" },
  { id: "tracks", icon: Target, label: "Tracks" },
  { id: "team", icon: Users, label: "Team" },
  { id: "faq", icon: HelpCircle, label: "FAQ" },
  { id: "footer", icon: ChevronDown, label: "Footer" },
]

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("hero")
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id)
      const scrollPosition = window.scrollY + 100

      for (const item of navItems) {
        const element = document.getElementById(item.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (item: NavItem) => {
    if (item.isRegister) {
      router.push("/register")
    } else {
      const element = document.getElementById(item.id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <nav className="fixed left-0 top-0 h-full w-20 bg-gray-900/80 backdrop-blur-sm z-50 flex-col items-center py-8 space-y-6 hidden lg:flex">
      {navItems.map((item) => {
        const Icon = item.icon
        const isActive = activeSection === item.id

        return (
          <button
            key={item.id}
            onClick={() => handleNavClick(item)}
            className={`group relative p-3 rounded-lg transition-all duration-300 ${
              isActive
                ? "bg-red-500 text-white neon-glow"
                : "text-gray-400 hover:text-cyan-400 hover:bg-gray-800"
            }`}
            title={item.label}
          >
            <Icon size={24} />
            {isActive && (
              <div className="absolute inset-0 rounded-lg bg-red-500/20 neon-border border border-red-500"></div>
            )}
            <span className="absolute left-full ml-4 px-2 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {item.label}
            </span>
          </button>
        )
      })}
    </nav>
  )
}