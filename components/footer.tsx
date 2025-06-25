import Link from "next/link"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="text-2xl font-bold font-cinzel gradient-text">
              VIVEK <span className="text-slate-400">KUMAR</span>
            </Link>
            <p className="mt-4 text-slate-400 professional-text">
              "Building innovative software solutions with clean code and modern technologies."
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-cinzel text-slate-200">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-slate-400 hover:text-amber-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#philosophy" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Philosophy
                </Link>
              </li>
              <li>
                <Link href="#experience" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#education" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Education
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-cinzel text-slate-200">Newsletter</h3>
            <p className="text-slate-400 mb-4 professional-text">
              Subscribe to receive updates on my latest projects and tech insights.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow bg-slate-700 border border-slate-600 rounded-l-lg px-4 py-2 text-slate-100 focus:outline-none focus:border-amber-400"
              />
              <button
                type="submit"
                className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-r-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 text-center text-slate-400">
          <p>© {currentYear} Vivek Kumar. All rights reserved.</p>
          <p className="mt-2 text-sm professional-text">
            "Designed and developed with modern web technologies and clean code principles."
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
