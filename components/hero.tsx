import Link from "next/link"
import AnimatedBackground from "./animated-background"
import TypewriterText from "./typewriter-text"

const Hero = () => {
  const taglines = [
    "Crafting features that matter, for people who matter.",
    "Transforming complex problems into elegant solutions.",
    "Building innovative software with clean code and modern technologies.",
    "Crafting scalable applications that drive business success.",
    // "Turning visionary ideas into powerful digital experiences.",
    "Engineering the future, one line of code at a time.",
  ]

  return (
    <section
      id="home"
      className="hero-section min-h-screen flex items-center justify-center text-center relative overflow-hidden"
    >
      {/* Animated background */}
      <AnimatedBackground />

      {/* Reduced opacity of floating decorative elements to not compete with animated background */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-amber-900/20 opacity-20 blur-3xl floating-element"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-amber-800/10 opacity-25 blur-3xl floating-element"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="elegant-border p-8 md:p-12 glass-effect rounded-2xl">
          {/* Animated entrance for the name */}
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-cinzel">
              <span className="gradient-text">VIVEK</span> <span className="text-slate-300">KUMAR</span>
            </h1>
          </div>

          {/* Animated entrance for the subtitle */}
          <div className="animate-fade-in-up animation-delay-300">
            <h2 className="text-xl md:text-3xl mb-8 text-slate-400 font-light">
              Developer • Engineer • Tech Enthusiast
            </h2>
          </div>

          {/* Typewriter animation for taglines */}
          <div className="animate-fade-in-up animation-delay-600">
            <div className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-4xl mx-auto professional-text min-h-[4.5rem] flex items-center justify-center">
              <TypewriterText
                texts={taglines}
                speed={80}
                deleteSpeed={40}
                pauseDuration={3000}
                className="text-slate-400 font-bold tracking-wide leading-relaxed"
              />
            </div>
          </div>

          {/* Animated entrance for buttons */}
          <div className="animate-fade-in-up animation-delay-900">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="#projects"
                className="modern-button text-amber-400 hover:text-amber-300 px-8 py-3 font-cinzel rounded-lg focus-ring transform hover:scale-105 transition-all duration-300"
              >
                View Projects
              </Link>
              <Link
                href="#skills"
                className="modern-button text-slate-300 hover:text-slate-200 px-8 py-3 font-cinzel rounded-lg focus-ring transform hover:scale-105 transition-all duration-300"
              >
                My Skills
              </Link>
            </div>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-fade-in-up animation-delay-1200">
          <div className="w-6 h-16 border-2 border-slate-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-amber-400 rounded-full animate-bounce mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
