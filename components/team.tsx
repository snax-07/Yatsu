"use client"

import { useEffect, useRef } from "react"

const founder = {
  name: "Yash Srivastava",
  role: "Founder & Leader",
  emoji: "👨‍💼",
  description: "Leading the vision and strategy for YÄ~TSU Squad's growth and innovation.",
}

const teamMembers = [
  {
    name: "Arshil Anwar",
    role: "Project Manager",
    emoji: "👩‍💻",
    description: "Coordinating projects and ensuring smooth workflow across all team initiatives.",
    linkedin: "https://www.linkedin.com/in/arshil-anwar-16baa3309"
  },
  {
    name: "Amrita",
    role: "Frontend Developer",
    emoji: "👩‍💻",
    description: "Creating beautiful and responsive user interfaces with modern web technologies.",
    linkedin: "https://www.linkedin.com/in/amrita-kumari-343960345/"
  },
  {
    name: "Ujjwal",
    role: "Designer",
    emoji: "👨‍🎨",
    description: "Crafting stunning visual designs and user experiences for our community.",
    linkedin: "https://www.linkedin.com/in/ujjwal-s-0922b3346/"
  },
  {
    name: "Roshni",
    role: "Social Media Manager",
    emoji: "👩‍💼",
    description: "Building our online presence and engaging with the tech community.",
    linkedin: "https://www.linkedin.com/in/roshni-roy-70856535b/"
  },
  {
    name: "Swapnil Nadel",
    role: "Backend Developer",
    emoji: "👨‍💻",
    description: "Developing robust server-side solutions and database architectures.",
    linkedin: "https://www.linkedin.com/in/swapnil-nade-417242296/"
  },
  {
    name: "Shivam Srivastava",
    role: "Event Coordinator",
    emoji: "👨‍🔧",
    description: "Organizing workshops, hackathons, and community events for skill development.",
    linkedin: "https://www.linkedin.com/in/shivam-srivastava-4033b8350"
  },
]

export default function Team() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("slide-up")
            }, index * 100)
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".team-card")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="team" ref={sectionRef} className="bg-[#0F0F0F] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white neon-glow mb-4">Meet the Organizers</h2>
        </div>

        {/* Founder Card */}
        <div className="flex justify-center mb-16">
          <div className="team-card rounded-xl p-5 border border-orange-500 hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_#FF6A00] hover:shadow-[0_0_30px_#FF6A00] text-center max-w-xs">
            <div className="text-5xl mb-3">{founder.emoji}</div>
            <h3 className="text-white text-xl font-bold drop-shadow-[0_0_4px_white] mb-2">{founder.name}</h3>
            <p className="text-orange-500 mb-2 text-base">{founder.role}</p>
            <p className="text-white text-xs mb-3">{founder.description}</p>
            <a
              href="https://www.linkedin.com/in/yash-srivastava-514252322/"
              className="inline-block px-3 py-1 border border-orange-500 rounded-full text-orange-500 hover:bg-orange-500 hover:text-black transition text-xs"
              target="_blank" rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-card rounded-xl p-5 border border-cyan-400 hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_#00FFFF] hover:shadow-[0_0_30px_#00FFFF] text-center max-w-xs mx-auto"
            >
              <div className="text-3xl mb-3">{member.emoji}</div>
              <h3 className="text-white text-lg font-bold drop-shadow-[0_0_4px_white]">{member.name}</h3>
              <p className="text-cyan-400 mb-2 text-sm">{member.role}</p>
              <p className="text-white text-xs mb-3">{member.description}</p>
              <a
                href={member.linkedin}
                className="inline-block px-3 py-1 border border-cyan-400 rounded-full text-cyan-400 hover:bg-cyan-400 hover:text-black transition text-xs"
                target="_blank" rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
