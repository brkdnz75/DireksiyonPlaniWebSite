import { useState, useEffect, useRef } from 'react'
import { Send, CheckCircle, Mail, Phone, Building2, User, AlertCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    courseName: '',
    phone: '',
    email: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const timeoutRef = useRef<number | null>(null)
  const apiBaseUrl = (
    import.meta.env.VITE_API_BASE_URL ||
    (import.meta.env.DEV ? 'http://localhost:3001' : '')
  ).replace(/\/+$/, '')

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const res = await fetch(`${apiBaseUrl}/api/demo-request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Bir hata oluştu.')
      }

      setIsSubmitted(true)
      timeoutRef.current = window.setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: '', courseName: '', phone: '', email: '', message: '' })
      }, 4000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Sunucuya bağlanılamadı. Lütfen tekrar deneyin.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="page-shell">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="section-title">Demo Talep Et</h1>
          <p className="section-subtitle">
            Formu doldurun, size en kısa sürede dönüş yapalım
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ücretsiz Demo ile Farkı Görün
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                DireksiyonPlanı'nı ücretsiz deneyimleyin. Uzman ekibimiz size özel demo 
                sunumu yapacak ve tüm sorularınızı yanıtlayacaktır.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 rounded-xl border border-primary/15 bg-primary/8 p-6">
                <div className="bg-primary text-white p-3 rounded-lg">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Kişiselleştirilmiş Demo</h3>
                  <p className="text-gray-600">
                    Kurumunuzun ihtiyaçlarına özel demo sunumu
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 rounded-xl border border-primary/15 bg-primary/8 p-6">
                <div className="bg-primary text-white p-3 rounded-lg">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Hızlı Kurulum</h3>
                  <p className="text-gray-600">
                    Aynı gün içinde sisteminizi kullanmaya başlayın
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 rounded-xl border border-primary/15 bg-primary/8 p-6">
                <div className="bg-primary text-white p-3 rounded-lg">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Ücretsiz Eğitim</h3>
                  <p className="text-gray-600">
                    Tüm ekibiniz için kapsamlı kullanım eğitimi
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 rounded-xl border border-primary/15 bg-primary/8 p-6">
                <div className="bg-primary text-white p-3 rounded-lg">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">7/24 Destek</h3>
                  <p className="text-gray-600">
                    Her zaman yanınızdayız, anında destek alın
                  </p>
                </div>
              </div>
            </div>

            <div className="panel-card p-6">
              <h3 className="font-bold text-gray-900 mb-4">İletişim Bilgileri</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-600">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>info@direksiyonplani.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+90 (555) 723 88 83</span>
                </div>
              </div>
            </div>
          </div>

          <div className="panel-card p-8">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Teşekkürler!</h3>
                <p className="text-gray-600">
                  Demo talebiniz alındı. En kısa sürede sizinle iletişime geçeceğiz.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="flex items-center text-gray-700 font-medium mb-2">
                    <User className="h-4 w-4 mr-2 text-primary" />
                    Ad Soyad *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    placeholder="Adınızı ve soyadınızı girin"
                  />
                </div>

                <div>
                  <label className="flex items-center text-gray-700 font-medium mb-2">
                    <Building2 className="h-4 w-4 mr-2 text-primary" />
                    Kurs Adı *
                  </label>
                  <input
                    type="text"
                    name="courseName"
                    value={formData.courseName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    placeholder="Sürücü kursunuzun adı"
                  />
                </div>

                <div>
                  <label className="flex items-center text-gray-700 font-medium mb-2">
                    <Phone className="h-4 w-4 mr-2 text-primary" />
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    placeholder="0XXX XXX XX XX"
                  />
                </div>

                <div>
                  <label className="flex items-center text-gray-700 font-medium mb-2">
                    <Mail className="h-4 w-4 mr-2 text-primary" />
                    E-posta *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    placeholder="ornek@email.com"
                  />
                </div>

                <div>
                  <label className="text-gray-700 font-medium mb-2 block">
                    Mesajınız (Opsiyonel)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                    placeholder="Özel taleplerinizi veya sorularınızı belirtebilirsiniz..."
                  />
                </div>

                {error && (
                  <div className="flex items-center space-x-2 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    <span className="text-sm">{error}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 rounded-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span>Gönderiliyor...</span>
                  ) : (
                    <>
                      <span>Ücretsiz Demo Talep Et</span>
                      <Send className="h-5 w-5" />
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-500 text-center">
                  Demo talebiniz ile birlikte size özel fiyat teklifi de alacaksınız
                </p>
              </form>
            )}
          </div>
        </div>

        <div className="mt-20 panel-card bg-gradient-to-br from-primary/5 to-secondary/8 p-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Sıkça Sorulan Sorular
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="panel-card p-6">
              <h3 className="font-bold text-gray-900 mb-2">Demo ne kadar sürer?</h3>
              <p className="text-gray-600">
                Ortalama 15-20 dakika süren demo, tüm özellikleri kapsar ve sorularınızı yanıtlarız.
              </p>
            </div>
            <div className="panel-card p-6">
              <h3 className="font-bold text-gray-900 mb-2">Kurulum ne kadar sürer?</h3>
              <p className="text-gray-600">
                Bulut tabanlı sistemimiz sayesinde aynı gün içinde kullanmaya başlayabilirsiniz.
              </p>
            </div>
            <div className="panel-card p-6">
              <h3 className="font-bold text-gray-900 mb-2">Teknik bilgi gerekli mi?</h3>
              <p className="text-gray-600">
                Hayır, kullanıcı dostu arayüzümüz sayesinde herkes kolayca kullanabilir.
              </p>
            </div>
            <div className="panel-card p-6">
              <h3 className="font-bold text-gray-900 mb-2">Fiyatlandırma nasıl?</h3>
              <p className="text-gray-600">
                Kursiyer sayınıza göre esnek fiyatlandırma. Demo talebinizle birlikte özel teklif alın.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
