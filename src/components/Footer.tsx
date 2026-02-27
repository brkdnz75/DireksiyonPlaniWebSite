import { Link } from 'react-router-dom'
import { Mail, Phone, Instagram, Youtube, Facebook } from 'lucide-react'
import { useAppPreferences } from '../context/AppPreferences'

export default function Footer() {
  const { theme, language } = useAppPreferences()
  const isDark = theme === 'dark'

  const labels =
    language === 'en'
      ? {
          description:
            'A modern, smart booking and management system for driving schools. Digitize your driving lesson operations.',
          quickLinks: 'Quick Links',
          contact: 'Contact',
          home: 'Home',
          features: 'Features',
          howItWorks: 'How It Works',
          videos: 'Video Guides',
          rights: 'All rights reserved.',
        }
      : {
          description:
            'Sürücü kursları için modern, akıllı rezervasyon ve yönetim sistemi. Direksiyon derslerinizi dijitalleştirin.',
          quickLinks: 'Hızlı Bağlantılar',
          contact: 'İletişim',
          home: 'Ana Sayfa',
          features: 'Özellikler',
          howItWorks: 'Nasıl Çalışır?',
          videos: 'Video Eğitimler',
          rights: 'Tüm hakları saklıdır.',
        }

  return (
    <footer
      className={`text-white ${
        isDark
          ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-[#132a55]'
          : 'bg-gradient-to-br from-[#0a2f78] via-[#0f3f9f] to-[#1f58c7]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="/screens/direksiyonplani-logo.png"
                alt="DireksiyonPlanı Logo"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-blue-100/85 mb-4">{labels.description}</p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/direksiyonplani/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-100/75 hover:text-white transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCSkwxojgSZR8Zr9-eWGvodw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-100/75 hover:text-white transition-colors"
              >
                <Youtube className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61588536311091"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-100/75 hover:text-white transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{labels.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-blue-100/80 hover:text-white transition-colors">
                  {labels.home}
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-blue-100/80 hover:text-white transition-colors">
                  {labels.features}
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-blue-100/80 hover:text-white transition-colors">
                  {labels.howItWorks}
                </Link>
              </li>
              <li>
                <Link to="/videos" className="text-blue-100/80 hover:text-white transition-colors">
                  {labels.videos}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{labels.contact}</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-blue-100/80">
                <Mail className="h-4 w-4" />
                <span>info@direksiyonplani.com</span>
              </li>
              <li className="flex items-center space-x-2 text-blue-100/80">
                <Phone className="h-4 w-4" />
                <span>+90 (555) 723 88 83</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-blue-100/80">
          <p>
            &copy; 2026 DireksiyonPlanı. {labels.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
