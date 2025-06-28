"use client"

import { useState, type KeyboardEvent } from "react"
import { X } from "lucide-react"

interface TagInputProps {
  tags: string[]
  onChange: (tags: string[]) => void
  placeholder?: string
}

export default function TagInput({ tags, onChange, placeholder }: TagInputProps) {
  const [inputValue, setInputValue] = useState("")

  const addTag = (tag: string) => {
    const trimmedTag = tag.trim()
    if (trimmedTag && !tags.includes(trimmedTag)) {
      onChange([...tags, trimmedTag])
    }
    setInputValue("")
  }

  const removeTag = (tagToRemove: string) => {
    onChange(tags.filter((tag) => tag !== tagToRemove))
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      addTag(inputValue)
    } else if (e.key === "Backspace" && !inputValue && tags.length > 0) {
      removeTag(tags[tags.length - 1])
    }
  }

  return (
    <div className="w-full p-4 bg-black/50 border border-gray-600 rounded-lg focus-within:border-[#D4FF00] focus-within:ring-2 focus-within:ring-[#D4FF00]/20 transition-all duration-300 glow-input">
      <div className="flex flex-wrap gap-2 mb-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-[#FF4D00] to-[#D4FF00] text-black text-sm font-semibold rounded-full glow-tag"
          >
            {tag}
            <button
              type="button"
              onClick={() => removeTag(tag)}
              className="ml-2 hover:bg-black/20 rounded-full p-0.5 transition-colors"
            >
              <X size={14} />
            </button>
          </span>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full bg-transparent text-white placeholder-gray-400 outline-none"
        placeholder={tags.length === 0 ? placeholder : "Add another language..."}
      />
    </div>
  )
}
