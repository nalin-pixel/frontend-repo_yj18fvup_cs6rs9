import { useState } from 'react'
import { Menu, X, Lightbulb, Phone, Mail } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-yellow-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-yellow-400/10 text-yellow-400">
              <Lightbulb size={20} />
            </div>
            <span className="text-white font-semibold tracking-tight">Lumen Studio</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-slate-200/80 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-medium text-black bg-yellow-400 hover:bg-yellow-300 px-4 py-2 rounded-md transition-colors">
              <Phone size={16} />
              Let’s talk
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md text-slate-200 hover:text-white hover:bg-white/5">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-slate-200/90 hover:text-white">
                {item.label}
              </a>
            ))}
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 text-sm font-medium text-black bg-yellow-400 hover:bg-yellow-300 px-4 py-2 rounded-md transition-colors w-max">
              <Mail size={16} />
              Email me
            </a>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
