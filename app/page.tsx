import Hero from "@/components/hero"
import About from "@/components/about"
import Philosophy from "@/components/philosophy"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Philosophy />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  )
}
