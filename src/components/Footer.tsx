import { Link } from 'react-router-dom'
import { Mail, Phone, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0a2f78] via-[#0f3f9f] to-[#1f58c7] text-white">
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
            <p className="text-blue-100/85 mb-4">
              Sürücü kursları için modern, akıllı rezervasyon ve yönetim sistemi.
              Direksiyon derslerinizi dijitalleştirin.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                 className="text-blue-100/75 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                 className="text-blue-100/75 hover:text-white transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-blue-100/80 hover:text-white transition-colors">Ana Sayfa</Link></li>
              <li><Link to="/features" className="text-blue-100/80 hover:text-white transition-colors">Özellikler</Link></li>
              <li><Link to="/how-it-works" className="text-blue-100/80 hover:text-white transition-colors">Nasıl Çalışır?</Link></li>
              <li><Link to="/videos" className="text-blue-100/80 hover:text-white transition-colors">Video Eğitimler</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
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
          <p>&copy; 2026 DireksiyonPlanı. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}
