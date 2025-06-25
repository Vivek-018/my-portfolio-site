import type React from "react"
import { Code, GitBranch, Database, Server,Feather,Compass, Moon, Sun } from "lucide-react"

const PhilosophyCard = ({
  title,
  description,
  icon: Icon,
}: {
  title: string
  description: string
  icon: React.ElementType
}) => {
  return (
    <div className="bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-700 card-hover">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-amber-400/10 rounded-lg mr-3">
          <Icon className="text-amber-400" size={24} />
        </div>
        <h3 className="text-xl font-bold font-cinzel text-slate-100">{title}</h3>
      </div>
      <p className="text-slate-300 professional-text">{description}</p>
    </div>
  )
}

const Philosophy = () => {
  const philosophies = [
       {
      title: "Empathy First",
      icon: Moon,
      description:
        "I begin every project by stepping into the user’s shoes—listening, observing, and understanding real needs—so that each feature truly makes life easier.",
    },
    {
      title: "Impactful Innovation",
      icon: Sun,
      description:
        "I don’t chase novelty for its own sake. I blend proven practices with fresh ideas to build solutions that drive meaningful change.",
    },
    {
      title: "Lifelong Learning",
      icon: Feather,
      description:
        "The tech world never stands still, and neither do I. Every new framework, every late‑night debugging session, sharpens my craft.",
    },
    {
      title: "Purposeful Direction",
      icon: Compass,
      description:
        "Guided by a clear vision—how will this touch lives?—I ensure every line of code and design choice aligns with a greater goal.",
    },
  ]

  return (
    <section id="philosophy" className="py-20 bg-slate-900 relative">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" fill="rgba(251, 191, 36, 0.8)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="section-heading text-3xl md:text-4xl font-bold mb-6 font-cinzel text-center text-slate-100">
          My Philosophy
        </h2>
        <p className="text-center text-slate-500 dark:text-slate-400 mb-16 max-w-3xl mx-auto professional-text">
           Four guiding principles that shape how I build software and drive real‑world impact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {philosophies.map((philosophy) => (
            <PhilosophyCard
              key={philosophy.title}
              title={philosophy.title}
              description={philosophy.description}
              icon={philosophy.icon}
            />
          ))}
        </div>

        <div className="mt-16 p-8 bg-slate-800/50 border border-slate-700 rounded-xl text-center">
          <blockquote className="text-xl italic text-slate-300 professional-text">
           "Technology is nothing. What's important is that you have a faith in people, that they're basically good and smart, and if you give them tools, they'll do wonderful things with them."
            <footer className="gradient-text mt-4 font-cinzel font-semibold">— Steve Jobs</footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

export default Philosophy
