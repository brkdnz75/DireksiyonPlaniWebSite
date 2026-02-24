import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Özellikler', path: '/features' },
    { name: 'Nasıl Çalışır?', path: '/how-it-works' },
    { name: 'Video Eğitimler', path: '/videos' },
    { name: 'Sosyal Medya', path: '/social' },
    { name: 'İletişim', path: '/contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-[#1f58c7]/15 bg-white/90 backdrop-blur-xl shadow-[0_8px_24px_rgba(20,44,94,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center rounded-2xl border border-[#1f58c7]/20 bg-gradient-to-br from-[#1f58c7]/10 to-[#2f74ef]/5 p-1.5 pr-3">
            <img
              src="/screens/direksiyonplani-logo.png"
              alt="DireksiyonPlanı"
              className="h-10 md:h-11 w-auto object-contain"
            />
            <span className="hidden sm:block text-sm font-semibold text-[#123b90]">DireksiyonPlanı</span>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#1f58c7] to-[#2f74ef] text-white shadow-[0_8px_18px_rgba(31,88,199,0.35)]'
                      : 'text-slate-700 hover:text-[#1f58c7] hover:bg-[#1f58c7]/10'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-xl bg-[#0f3f9f] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(15,63,159,0.35)] transition-all duration-300 hover:bg-[#164db6]"
            >
              Demo Talep Et
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-xl border border-[#1f58c7]/20 p-2 text-[#1f58c7] hover:bg-[#1f58c7]/10"
            aria-label={isOpen ? 'Menüyü Kapat' : 'Menüyü Aç'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-[#1f58c7]/15 bg-white/95 backdrop-blur-xl">
          <div className="px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-[#1f58c7] text-white'
                      : 'text-slate-700 hover:bg-[#1f58c7]/10 hover:text-[#1f58c7]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 block rounded-lg bg-[#0f3f9f] px-3 py-2.5 text-center text-sm font-semibold text-white"
            >
              Demo Talep Et
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
