import Image from "next/image"

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading text-3xl md:text-4xl font-bold mb-16 font-cinzel text-center text-slate-100">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4 font-cinzel gradient-text">Software Engineer</h3>
            <div className="space-y-6 professional-text">
              <p className="text-slate-300">
                I’m <strong>Vivek Kumar</strong>, a software engineer and
                full‑stack web developer who lives and breathes technology. For
                me, writing code isn’t just about syntax or frameworks—it’s
                about using every line to make someone’s day a little easier, to
                spark new possibilities, and to leave a positive mark on the
                world.
              </p>
              <p className="text-slate-300">
                My journey began the moment I saw how a simple app could connect
                people across continents. Since then, I’ve immersed myself in
                front‑end and back‑end tools alike—crafting intuitive UIs,
                architecting resilient APIs, and deploying scalable services.
                Along the way I learned that the secret ingredient to any great
                project is empathy: understanding real human problems before
                reaching for the keyboard.
              </p>
              <p className="text-slate-300">
                When I’m not building features or debugging late‑night
                deployments, you’ll find me mentoring aspiring developers,
                diving into the latest tech talks, or sketching out ideas in a
                notebook. My true north is impact—so whether it’s a passion
                project or a client solution, I aim to deliver work that
                matters.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 border-2 border-amber-400/30 rounded-lg"></div>
              <div className="absolute inset-0 transform translate-x-4 translate-y-4 border-2 border-amber-400/20 rounded-lg"></div>
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.png?height=400&width=400"
                  alt="Vivek Kumar"
                  width={400}
                  height={400}
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-12 -right-12 w-32 h-32 opacity-20">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="40" fill="rgba(251, 191, 36, 0.6)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
