import Sidebar from "@/components/sidebar"
import Hero from "@/components/hero"
import About from "@/components/about"
import TechTracks from "@/components/tech-tracks"
import Team from "@/components/team"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="relative bg-[#0F0F0F]">
      <Sidebar />
      <div className="ml-0 lg:ml-20 relative">
        <Hero />
        <About />
        <TechTracks />
        <Team />
        <FAQ />
        <Footer />
      </div>
    </main>
  )
}
