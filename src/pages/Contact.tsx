import { useState, useEffect, useRef } from 'react'
import { Send, CheckCircle, Mail, Phone, Building2, User, AlertCircle } from 'lucide-react'
import { useAppPreferences } from '../context/AppPreferences'

export default function Contact() {
  const { language } = useAppPreferences()
  const isEn = language === 'en'

  const [formData, setFormData] = useState({
    name: '',
    courseName: '',
    phone: '',
    email: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const timeoutRef = useRef<number | null>(null)
  const configuredApiBaseUrl = (import.meta.env.VITE_API_BASE_URL || '').trim()
  const apiBaseUrl = (() => {
    if (!configuredApiBaseUrl) {
      return import.meta.env.DEV ? 'http://localhost:3001' : ''
    }

    try {
      return new URL(configuredApiBaseUrl).toString().replace(/\/+$/, '')
    } catch {
      return import.meta.env.DEV ? 'http://localhost:3001' : ''
    }
  })()

  const copy = isEn
    ? {
        title: 'Request a Demo',
        subtitle: 'Fill out the form and we will get back to you shortly',
        leftTitle: 'See the Difference with a Free Demo',
        leftDesc:
          'Experience DireksiyonPlanı for free. Our team will provide a personalized demo and answer all your questions.',
        highlights: [
          { title: 'Personalized Demo', desc: 'A demo tailored to your institution' },
          { title: 'Fast Onboarding', desc: 'Start using the system the same day' },
          { title: 'Free Training', desc: 'Comprehensive usage training for your team' },
          { title: '24/7 Support', desc: 'Always-on support when you need it' },
        ],
        contactInfo: 'Contact Information',
        successTitle: 'Thank You!',
        successDesc: 'Your demo request has been received. We will contact you shortly.',
        labels: {
          name: 'Full Name *',
          courseName: 'Driving School Name *',
          phone: 'Phone *',
          email: 'Email *',
          message: 'Message (Optional)',
        },
        placeholders: {
          name: 'Enter your full name',
          courseName: 'Your driving school name',
          phone: '0XXX XXX XX XX',
          email: 'name@email.com',
          message: 'You can share any custom requests or questions...',
        },
        sending: 'Sending...',
        submit: 'Request Free Demo',
        pricingNote: 'You will also receive a tailored pricing proposal with your demo request.',
        faqTitle: 'Frequently Asked Questions',
        faq: [
          {
            q: 'How long does the demo take?',
            a: 'The demo usually takes 15-20 minutes and covers all key features with Q&A.',
          },
          {
            q: 'How long does setup take?',
            a: 'Thanks to our cloud-based platform, you can start using it the same day.',
          },
          {
            q: 'Do we need technical knowledge?',
            a: 'No. The interface is designed to be simple and easy for every role.',
          },
          {
            q: 'How does pricing work?',
            a: 'Flexible pricing based on student count. You will receive a custom quote with your demo request.',
          },
        ],
        fallbackError: 'Could not connect to the server. Please try again.',
        unknownError: 'An error occurred.',
      }
    : {
        title: 'Demo Talep Et',
        subtitle: 'Formu doldurun, size en kısa sürede dönüş yapalım',
        leftTitle: 'Ücretsiz Demo ile Farkı Görün',
        leftDesc:
          "DireksiyonPlanı'nı ücretsiz deneyimleyin. Uzman ekibimiz size özel demo sunumu yapacak ve tüm sorularınızı yanıtlayacaktır.",
        highlights: [
          { title: 'Kişiselleştirilmiş Demo', desc: 'Kurumunuzun ihtiyaçlarına özel demo sunumu' },
          { title: 'Hızlı Kurulum', desc: 'Aynı gün içinde sisteminizi kullanmaya başlayın' },
          { title: 'Ücretsiz Eğitim', desc: 'Tüm ekibiniz için kapsamlı kullanım eğitimi' },
          { title: '7/24 Destek', desc: 'Her zaman yanınızdayız, anında destek alın' },
        ],
        contactInfo: 'İletişim Bilgileri',
        successTitle: 'Teşekkürler!',
        successDesc: 'Demo talebiniz alındı. En kısa sürede sizinle iletişime geçeceğiz.',
        labels: {
          name: 'Ad Soyad *',
          courseName: 'Kurs Adı *',
          phone: 'Telefon *',
          email: 'E-posta *',
          message: 'Mesajınız (Opsiyonel)',
        },
        placeholders: {
          name: 'Adınızı ve soyadınızı girin',
          courseName: 'Sürücü kursunuzun adı',
          phone: '0XXX XXX XX XX',
          email: 'ornek@email.com',
          message: 'Özel taleplerinizi veya sorularınızı belirtebilirsiniz...',
        },
        sending: 'Gönderiliyor...',
        submit: 'Ücretsiz Demo Talep Et',
        pricingNote: 'Demo talebinizle birlikte size özel fiyat teklifi de alacaksınız',
        faqTitle: 'Sıkça Sorulan Sorular',
        faq: [
          {
            q: 'Demo ne kadar sürer?',
            a: 'Ortalama 15-20 dakika süren demo, tüm özellikleri kapsar ve sorularınızı yanıtlarız.',
          },
          {
            q: 'Kurulum ne kadar sürer?',
            a: 'Bulut tabanlı sistemimiz sayesinde aynı gün içinde kullanmaya başlayabilirsiniz.',
          },
          {
            q: 'Teknik bilgi gerekli mi?',
            a: 'Hayır, kullanıcı dostu arayüzümüz sayesinde herkes kolayca kullanabilir.',
          },
          {
            q: 'Fiyatlandırma nasıl?',
            a: 'Kursiyer sayınıza göre esnek fiyatlandırma. Demo talebinizle birlikte özel teklif alın.',
          },
        ],
        fallbackError: 'Sunucuya bağlanılamadı. Lütfen tekrar deneyin.',
        unknownError: 'Bir hata oluştu.',
      }

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
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || copy.unknownError)
      }

      setIsSubmitted(true)
      timeoutRef.current = window.setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: '', courseName: '', phone: '', email: '', message: '' })
      }, 4000)
    } catch (err) {
      setError(err instanceof Error ? err.message : copy.fallbackError)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="page-shell">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="section-title">{copy.title}</h1>
          <p className="section-subtitle">{copy.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{copy.leftTitle}</h2>
              <p className="text-lg text-gray-600 mb-6">{copy.leftDesc}</p>
            </div>

            <div className="space-y-6">
              {copy.highlights.map((item) => (
                <div key={item.title} className="flex items-start space-x-4 rounded-xl border border-primary/15 bg-primary/8 p-6">
                  <div className="bg-primary text-white p-3 rounded-lg">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="panel-card p-6">
              <h3 className="font-bold text-gray-900 mb-4">{copy.contactInfo}</h3>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{copy.successTitle}</h3>
                <p className="text-gray-600">{copy.successDesc}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="flex items-center text-gray-700 font-medium mb-2">
                    <User className="h-4 w-4 mr-2 text-primary" />
                    {copy.labels.name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    placeholder={copy.placeholders.name}
                  />
                </div>

                <div>
                  <label className="flex items-center text-gray-700 font-medium mb-2">
                    <Building2 className="h-4 w-4 mr-2 text-primary" />
                    {copy.labels.courseName}
                  </label>
                  <input
                    type="text"
                    name="courseName"
                    value={formData.courseName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    placeholder={copy.placeholders.courseName}
                  />
                </div>

                <div>
                  <label className="flex items-center text-gray-700 font-medium mb-2">
                    <Phone className="h-4 w-4 mr-2 text-primary" />
                    {copy.labels.phone}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    placeholder={copy.placeholders.phone}
                  />
                </div>

                <div>
                  <label className="flex items-center text-gray-700 font-medium mb-2">
                    <Mail className="h-4 w-4 mr-2 text-primary" />
                    {copy.labels.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    placeholder={copy.placeholders.email}
                  />
                </div>

                <div>
                  <label className="text-gray-700 font-medium mb-2 block">{copy.labels.message}</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                    placeholder={copy.placeholders.message}
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
                    <span>{copy.sending}</span>
                  ) : (
                    <>
                      <span>{copy.submit}</span>
                      <Send className="h-5 w-5" />
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-500 text-center">{copy.pricingNote}</p>
              </form>
            )}
          </div>
        </div>

        <div className="mt-20 panel-card bg-gradient-to-br from-primary/5 to-secondary/8 p-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">{copy.faqTitle}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {copy.faq.map((item) => (
              <div key={item.q} className="panel-card p-6">
                <h3 className="font-bold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
