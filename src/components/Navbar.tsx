import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useAppPreferences } from '../context/AppPreferences'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, language, setLanguage, toggleTheme } = useAppPreferences()
  const isDark = theme === 'dark'

  const navLinks =
    language === 'en'
      ? [
          { name: 'Home', path: '/' },
          { name: 'Features', path: '/features' },
          { name: 'How It Works', path: '/how-it-works' },
          { name: 'Video Guides', path: '/videos' },
          { name: 'Social', path: '/social' },
          { name: 'Contact', path: '/contact' },
        ]
      : [
          { name: 'Ana Sayfa', path: '/' },
          { name: 'Özellikler', path: '/features' },
          { name: 'Nasıl Çalışır?', path: '/how-it-works' },
          { name: 'Video Eğitimler', path: '/videos' },
          { name: 'Sosyal Medya', path: '/social' },
          { name: 'İletişim', path: '/contact' },
        ]

  const ctaLabel = language === 'en' ? 'Book Demo' : 'Demo Talep Et'
  const closeLabel = language === 'en' ? 'Close Menu' : 'Menüyü Kapat'
  const openLabel = language === 'en' ? 'Open Menu' : 'Menüyü Aç'
  const themeLabel = language === 'en' ? 'Toggle theme' : 'Temayı Değiştir'

  return (
    <nav
      className={`sticky top-0 z-50 border-b backdrop-blur-xl ${
        isDark
          ? 'border-sky-300/15 bg-slate-950/85 shadow-[0_8px_24px_rgba(2,6,23,0.55)]'
          : 'border-[#1f58c7]/15 bg-white/90 shadow-[0_8px_24px_rgba(20,44,94,0.08)]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden md:flex h-20 items-center justify-between gap-3">
          <Link
            to="/"
            className={`flex items-center rounded-2xl border p-1.5 pr-3 ${
              isDark
                ? 'border-sky-300/20 bg-gradient-to-br from-sky-400/15 to-blue-500/10'
                : 'border-[#1f58c7]/20 bg-gradient-to-br from-[#1f58c7]/10 to-[#2f74ef]/5'
            }`}
          >
            <img
              src="/screens/direksiyonplani-logo.png"
              alt="DireksiyonPlanı"
              className="h-9 sm:h-10 md:h-11 w-auto object-contain"
            />
            <span
              className={`text-xs sm:text-sm font-semibold whitespace-nowrap ${
                isDark ? 'text-sky-100' : 'text-[#123b90]'
              }`}
            >
              DireksiyonPlanı
            </span>
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
                      : isDark
                        ? 'text-slate-200 hover:text-sky-200 hover:bg-sky-500/15'
                        : 'text-slate-700 hover:text-[#1f58c7] hover:bg-[#1f58c7]/10'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <div className={`rounded-xl p-1 ${isDark ? 'bg-slate-900/80' : 'bg-white/80 border border-[#1f58c7]/15'}`}>
              <button
                type="button"
                onClick={() => setLanguage('tr')}
                className={`px-2.5 py-1.5 text-xs font-semibold rounded-lg transition ${
                  language === 'tr'
                    ? 'bg-primary text-white'
                    : isDark
                      ? 'text-slate-300 hover:bg-slate-800'
                      : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                TR
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1.5 text-xs font-semibold rounded-lg transition ${
                  language === 'en'
                    ? 'bg-primary text-white'
                    : isDark
                      ? 'text-slate-300 hover:bg-slate-800'
                      : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                EN
              </button>
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label={themeLabel}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-xl transition ${
                isDark
                  ? 'bg-slate-900 text-sky-200 hover:bg-slate-800'
                  : 'bg-white border border-[#1f58c7]/20 text-[#1f58c7] hover:bg-[#1f58c7]/10'
              }`}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <Link
              to="/contact"
              className="inline-flex items-center rounded-xl bg-[#0f3f9f] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(15,63,159,0.35)] transition-all duration-300 hover:bg-[#164db6]"
            >
              {ctaLabel}
            </Link>
          </div>
        </div>

        <div className="md:hidden py-3">
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className={`min-w-0 flex-1 flex items-center rounded-2xl border p-1.5 pr-2 ${
                isDark
                  ? 'border-sky-300/20 bg-gradient-to-br from-sky-400/15 to-blue-500/10'
                  : 'border-[#1f58c7]/20 bg-gradient-to-br from-[#1f58c7]/10 to-[#2f74ef]/5'
              }`}
            >
              <img
                src="/screens/direksiyonplani-logo.png"
                alt="DireksiyonPlanı"
                className="h-8 w-auto object-contain"
              />
              <span
                className={`min-w-0 text-[10px] min-[390px]:text-[11px] font-semibold whitespace-nowrap truncate ${
                  isDark ? 'text-sky-100' : 'text-[#123b90]'
                }`}
              >
                DireksiyonPlanı
              </span>
            </Link>

            <div
              className={`shrink-0 inline-flex items-center gap-1 whitespace-nowrap rounded-xl p-0.5 ${
                isDark ? 'bg-slate-900/90' : 'bg-white/80 border border-[#1f58c7]/15'
              }`}
            >
              <button
                type="button"
                onClick={() => setLanguage('tr')}
                className={`min-w-10 px-2 py-1 text-[11px] font-semibold rounded-lg transition ${
                  language === 'tr'
                    ? 'bg-primary text-white'
                    : isDark
                      ? 'text-slate-300 hover:bg-slate-800'
                      : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                TR
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`min-w-10 px-2 py-1 text-[11px] font-semibold rounded-lg transition ${
                  language === 'en'
                    ? 'bg-primary text-white'
                    : isDark
                      ? 'text-slate-300 hover:bg-slate-800'
                      : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                EN
              </button>
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label={themeLabel}
              className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition ${
                isDark
                  ? 'bg-slate-900 text-sky-200 hover:bg-slate-800'
                  : 'bg-white border border-[#1f58c7]/20 text-[#1f58c7] hover:bg-[#1f58c7]/10'
              }`}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`rounded-xl border p-2 shrink-0 ${
                isDark
                  ? 'border-sky-300/20 text-sky-200 hover:bg-sky-500/10'
                  : 'border-[#1f58c7]/20 text-[#1f58c7] hover:bg-[#1f58c7]/10'
              }`}
              aria-label={isOpen ? closeLabel : openLabel}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className={`md:hidden border-t backdrop-blur-xl ${
            isDark
              ? 'border-sky-300/15 bg-slate-950/95'
              : 'border-[#1f58c7]/15 bg-white/95'
          }`}
        >
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
                      : isDark
                        ? 'text-slate-200 hover:bg-sky-500/15 hover:text-sky-200'
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
              {ctaLabel}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
