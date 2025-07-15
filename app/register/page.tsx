"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import AnimatedBackground from "@/components/animated-background-form"
import TagInput from "@/components/tag-input"
import axios from 'axios'
import {
  Upload,
  User,
  Mail,
  MapPin,
  Instagram,
  Linkedin,
  Github,
  GraduationCap,
  Calendar,
  Laptop,
  Phone,
  Users,
} from "lucide-react"

interface FormData {
  name: string
  email: string
  address: string
  instagram: string
  linkedin: string
  github: string
  githubUsername: string
  college: string
  graduationYear: string
  currentYear: string
  resume: File | null
  codingLanguages: string[]
  attendOutOfState: string
  gender: string
  hasLaptop: string
  phone: string
  referenceSource: string
  friendReferenceId: string
  otherDescription: string
  socialMedia: string
  leader: string
}

export default function RegisterPage() {
  const router = useRouter()
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    address: "",
    instagram: "",
    linkedin: "",
    github: "",
    githubUsername: "",
    college: "",
    graduationYear: "",
    currentYear: "",
    resume: null,
    codingLanguages: [],
    attendOutOfState: "",
    gender: "",
    hasLaptop: "",
    phone: "",
    referenceSource: "",
    friendReferenceId: "",
    otherDescription: "",
    socialMedia: "",
    leader: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 20 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, resume: "File size must be less than 20MB" }))
        return
      }
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "image/jpeg",
        "image/png",
      ]
      if (!allowedTypes.includes(file.type)) {
        setErrors((prev) => ({ ...prev, resume: "Only PDF, DOC, and Image files are allowed" }))
        return
      }
      setFormData((prev) => ({ ...prev, resume: file }))
      setErrors((prev) => ({ ...prev, resume: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    if (!formData.address.trim()) newErrors.address = "Address is required"
    if (!formData.linkedin.trim()) newErrors.linkedin = "LinkedIn profile is required"
    if (!formData.college.trim()) newErrors.college = "College name is required"
    if (!formData.graduationYear.trim()) newErrors.graduationYear = "Graduation year is required"
    if (!formData.currentYear.trim()) newErrors.currentYear = "Current year of study is required"
    if (formData.codingLanguages.length === 0) newErrors.codingLanguages = "At least one coding language is required"
    if (!formData.attendOutOfState.trim()) newErrors.attendOutOfState = "This field is required"
    if (!formData.gender.trim()) newErrors.gender = "Gender is required"
    if (!formData.hasLaptop.trim()) newErrors.hasLaptop = "This field is required"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.referenceSource.trim()) newErrors.referenceSource = "Please select how you heard about us"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)

    console.log(formData.resume)
    const response = await axios.post('/api/registerUser' , formData);
    console.log(response.data.message)

    router.push("/register/confirmation")
  }

  return (
    <div className="min-h-screen bg-[#0E0E11] relative overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold font-orbitron text-white mb-6 glow-text">YÄ~TSU SQUAD</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
              Our team is an active and technically skilled group that participates in various tech events. We
              specialize in the latest technologies and believe in embracing new ideas. Our goal is to continuously
              learn, grow, and achieve excellence.
            </p>
            <p className="text-sm text-gray-400 bg-gray-900/50 p-4 rounded-lg border border-gray-700">
              <strong>Note:</strong> The name, email address, and photo associated with your Google Account will be
              recorded when you upload files and submit this form.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 glow-border">
              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    <User className="inline w-4 h-4 mr-2" />
                    Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full p-4 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-[#FF4D00] focus:ring-2 focus:ring-[#FF4D00]/20 transition-all duration-300 glow-input"
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    <Mail className="inline w-4 h-4 mr-2" />
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full p-4 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-[#FF4D00] focus:ring-2 focus:ring-[#FF4D00]/20 transition-all duration-300 glow-input"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-white font-semibold mb-2">
                  <MapPin className="inline w-4 h-4 mr-2" />
                  Address *
                </label>
                <textarea
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  className="w-full p-4 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-[#FF4D00] focus:ring-2 focus:ring-[#FF4D00]/20 transition-all duration-300 glow-input"
                  rows={3}
                  placeholder="Enter your complete address"
                />
                {errors.address && <p className="text-red-400 text-sm mt-1">{errors.address}</p>}
              </div>

              {/* Social Media */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    <Instagram className="inline w-4 h-4 mr-2" />
                    Instagram Account
                  </label>
                  <input
                    type="text"
                    value={formData.instagram}
                    onChange={(e) => handleInputChange("instagram", e.target.value)}
                    className="w-full p-4 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-[#D4FF00] focus:ring-2 focus:ring-[#D4FF00]/20 transition-all duration-300 glow-input"
                    placeholder="@username"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    <Linkedin className="inline w-4 h-4 mr-2" />
                    LinkedIn Profile Link *
                  </label>
                  <input
                    type="url"
                    value={formData.linkedin}
                    onChange={(e) => handleInputChange("linkedin", e.target.value)}
                    className="w-full p-4 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-[#D4FF00] focus:ring-2 focus:ring-[#D4FF00]/20 transition-all duration-300 glow-input"
                    placeholder="https://linkedin.com/in/username"
                  />
                  {errors.linkedin && <p className="text-red-400 text-sm mt-1">{errors.linkedin}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    <Github className="inline w-4 h-4 mr-2" />
                    GitHub Account
                  </label>
                  <input
                    type="text"
                    value={formData.github}
                    onChange={(e) => handleInputChange("github", e.target.value)}
                    className="w-full p-4 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-[#FF4D00] focus:ring-2 focus:ring-[#FF4D00]/20 transition-all duration-300 glow-input"
                    placeholder="https://github.com/username"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    <Github className="inline w-4 h-4 mr-2" />
                    GitHub Username
                  </label>
                  <input
                    type="text"
                    value={formData.githubUsername}
                    onChange={(e) => handleInputChange("githubUsername", e.target.value)}
                    className="w-full p-4 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-[#FF4D00] focus:ring-2 focus:ring-[#FF4D00]/20 transition-all duration-300 glow-input"
                    placeholder="username"
                  />
                </div>
              </div>

              {/* Academic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    <GraduationCap className="inline w-4 h-4 mr-2" />
                    College Name *
                  </label>
                  <input
                    type="text"
                    value={formData.college}
                    onChange={(e) => handleInputChange("college", e.target.value)}
                    className="w-full p-4 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-[#D4FF00] focus:ring-2 focus:ring-[#D4FF00]/20 transition-all duration-300 glow-input"
                    placeholder="Your college/university name"
                  />
                  {errors.college && <p className="text-red-400 text-sm mt-1">{errors.college}</p>}
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    <Calendar className="inline w-4 h-4 mr-2" />
                    Graduation Year *
                  </label>
                  <input
                    type="number"
                    value={formData.graduationYear}
                    onChange={(e) => handleInputChange("graduationYear", e.target.value)}
                    className="w-full p-4 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-[#D4FF00] focus:ring-2 focus:ring-[#D4FF00]/20 transition-all duration-300 glow-input"
                    placeholder="2025"
                    min="2020"
                    max="2030"
                  />
                  {errors.graduationYear && <p className="text-red-400 text-sm mt-1">{errors.graduationYear}</p>}
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-white font-semibold mb-2">Current Year of Study *</label>
                <select
                  value={formData.currentYear}
                  onChange={(e) => handleInputChange("currentYear", e.target.value)}
                  className="w-full p-4 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-[#FF4D00] focus:ring-2 focus:ring-[#FF4D00]/20 transition-all duration-300 glow-input"
                >
                  <option value="">Select your current year</option>
                  <option value="First Year">First Year</option>
                  <option value="Second Year">Second Year</option>
                  <option value="Third Year">Third Year</option>
                  <option value="Fourth Year">Fourth Year</option>
                </select>
                {errors.currentYear && <p className="text-red-400 text-sm mt-1">{errors.currentYear}</p>}
              </div>

              {/* Resume Upload */}
              <div className="mb-8">
                <label className="block text-white font-semibold mb-2">
                  <Upload className="inline w-4 h-4 mr-2" />
                  Resume Upload
                </label>
                <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-[#FF4D00] transition-colors duration-300">
                  <input
                    type="file"
                    onChange={handleFileUpload}
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    className="hidden"
                    id="resume-upload"
                  />
                  <label htmlFor="resume-upload" className="cursor-pointer">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-300">Click to upload your resume</p>
                    <p className="text-sm text-gray-500 mt-1">PDF, DOC, Image • Max 20MB</p>
                  </label>
                  {formData.resume && <p className="text-[#D4FF00] mt-2">✓ {formData.resume.name}</p>}
                </div>
                {errors.resume && <p className="text-red-400 text-sm mt-1">{errors.resume}</p>}
              </div>

              {/* Coding Languages */}
              <div className="mb-8">
                <label className="block text-white font-semibold mb-2">Which coding languages do you know? *</label>
                <TagInput
                  tags={formData.codingLanguages}
                  onChange={(tags) => handleInputChange("codingLanguages", tags)}
                  placeholder="Type a language and press Enter or Space"
                />
                {errors.codingLanguages && <p className="text-red-400 text-sm mt-1">{errors.codingLanguages}</p>}
              </div>

              {/* Additional Questions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    If the event is in another state, will you attend? *
                  </label>
                  <select
                    value={formData.attendOutOfState}
                    onChange={(e) => handleInputChange("attendOutOfState", e.target.value)}
                    className="w-full p-4 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-[#D4FF00] focus:ring-2 focus:ring-[#D4FF00]/20 transition-all duration-300 glow-input"
                  >
                    <option value="">Select an option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="Depends on state">Depends on state</option>
                  </select>
                  {errors.attendOutOfState && <p className="text-red-400 text-sm mt-1">{errors.attendOutOfState}</p>}
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Gender *</label>
                  <select
                    value={formData.gender}
                    onChange={(e) => handleInputChange("gender", e.target.value)}
                    className="w-full p-4 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-[#D4FF00] focus:ring-2 focus:ring-[#D4FF00]/20 transition-all duration-300 glow-input"
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  {errors.gender && <p className="text-red-400 text-sm mt-1">{errors.gender}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    <Laptop className="inline w-4 h-4 mr-2" />
                    Do you have a laptop? *
                  </label>
                  <select
                    value={formData.hasLaptop}
                    onChange={(e) => handleInputChange("hasLaptop", e.target.value)}
                    className="w-full p-4 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-[#FF4D00] focus:ring-2 focus:ring-[#FF4D00]/20 transition-all duration-300 glow-input"
                  >
                    <option value="">Select an option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  {errors.hasLaptop && <p className="text-red-400 text-sm mt-1">{errors.hasLaptop}</p>}
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    <Phone className="inline w-4 h-4 mr-2" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="w-full p-4 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-[#FF4D00] focus:ring-2 focus:ring-[#FF4D00]/20 transition-all duration-300 glow-input"
                    placeholder="+91 9876543210"
                  />
                  {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Reference Source */}
              <div className="mb-8">
                <label className="block text-white font-semibold mb-2">
                  <Users className="inline w-4 h-4 mr-2" />
                  How did you hear about YÄ~TSU Squad? *
                </label>
                <select
                  value={formData.referenceSource}
                  onChange={(e) => handleInputChange("referenceSource", e.target.value)}
                  className="w-full p-4 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-[#D4FF00] focus:ring-2 focus:ring-[#D4FF00]/20 transition-all duration-300 glow-input"
                >
                  <option value="">Select an option</option>
                  <option value="Friend">Friend</option>
                  <option value="Other">Other</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Leader or Co-Leader">Leader or Co-Leader</option>
                </select>
                {errors.referenceSource && <p className="text-red-400 text-sm mt-1">{errors.referenceSource}</p>}

                {/* Conditional Fields */}
                {formData.referenceSource === "Friend" && (
                  <div className="mt-4">
                    <input
                      type="text"
                      value={formData.friendReferenceId}
                      onChange={(e) => handleInputChange("friendReferenceId", e.target.value)}
                      className="w-full p-4 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-[#D4FF00] focus:ring-2 focus:ring-[#D4FF00]/20 transition-all duration-300 glow-input"
                      placeholder="Enter your friend's reference ID (optional)"
                    />
                  </div>
                )}

                {formData.referenceSource === "Other" && (
                  <div className="mt-4">
                    <textarea
                      value={formData.otherDescription}
                      onChange={(e) => handleInputChange("otherDescription", e.target.value)}
                      className="w-full p-4 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-[#D4FF00] focus:ring-2 focus:ring-[#D4FF00]/20 transition-all duration-300 glow-input"
                      rows={3}
                      placeholder="Describe how you found us (optional)"
                    />
                  </div>
                )}

                {formData.referenceSource === "Social Media" && (
                  <div className="mt-4">
                    <select
                      value={formData.socialMedia}
                      onChange={(e) => handleInputChange("socialMedia", e.target.value)}
                      className="w-full p-4 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-[#D4FF00] focus:ring-2 focus:ring-[#D4FF00]/20 transition-all duration-300 glow-input"
                    >
                      <option value="">Choose platform</option>
                      <option value="Instagram">Instagram</option>
                      <option value="X (Twitter)">X (Twitter)</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Threads">Threads</option>
                    </select>
                  </div>
                )}

                {formData.referenceSource === "Leader or Co-Leader" && (
                  <div className="mt-4">
                    <select
                      value={formData.leader}
                      onChange={(e) => handleInputChange("leader", e.target.value)}
                      className="w-full p-4 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-[#D4FF00] focus:ring-2 focus:ring-[#D4FF00]/20 transition-all duration-300 glow-input"
                    >
                      <option value="">Choose leader</option>
                      <option value="Yash Srivastava">Yash Srivastava</option>
                      <option value="Roshni Roy">Roshni Roy</option>
                      <option value="Amrita">Amrita</option>
                      <option value="Ujjwal Saroj">Ujjwal Saroj</option>
                      <option value="Arshil Anwar">Arshil Anwar</option>
                      <option value="Swapnil Nade">Swapnil Nade</option>
                      <option value="Shivam Srivastava">Shivam Srivastava</option>
                    </select>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-12 py-4 bg-gradient-to-r from-[#FF4D00] to-[#D4FF00] text-black font-bold rounded-full text-xl hover:scale-105 transition-all duration-300 glow-button disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                      Joining Squad...
                    </span>
                  ) : (
                    "Join YÄ~TSU Squad"
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
