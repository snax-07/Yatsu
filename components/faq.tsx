"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Who can join YÄ~TSU Squad?",
    answer:
      "Anyone passionate about technology and innovation can join! Whether you're a beginner or experienced developer, designer, or tech enthusiast, you're welcome in our community.",
  },
  {
    question: "What are the benefits of joining?",
    answer:
      "Members get access to exclusive workshops, networking events, mentorship opportunities, collaborative projects, and a supportive community of like-minded individuals.",
  },
  {
    question: "Is there a membership fee?",
    answer:
      "No! YÄ~TSU Squad is completely free to join. We believe in making technology education and community accessible to everyone.",
  },
  {
    question: "How can I participate in events?",
    answer:
      "Once you join, you'll receive notifications about upcoming events, workshops, and hackathons. You can register for events through our community platform or social media channels.",
  },
  {
    question: "Do I need prior programming experience?",
    answer:
      "Not at all! We welcome members at all skill levels. We have beginner-friendly workshops and mentorship programs to help you get started on your tech journey.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold text-white neon-glow">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-300">Got questions? We've got answers!</p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border-2 rounded-lg transition-all duration-300 ${
                openIndex === index
                  ? "border-turquoise-400 neon-border"
                  : "border-orange-500 hover:border-turquoise-400"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-900/30 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white neon-glow">{faq.question}</h3>
                <ChevronDown
                  className={`text-orange-500 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  size={24}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 text-gray-300 leading-relaxed">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
