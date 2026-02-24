import { Link } from 'react-router-dom'
import { UserPlus, Calendar, Bell } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: <UserPlus className="h-16 w-16 text-white" />,
      number: '01',
      title: 'Kursiyer Ekleme',
      description: 'Yeni kursiyerleri sisteme ekleyin. İsim, telefon ve eğitmen bilgilerini girin. Kursiyer hesabı otomatik oluşturulur.',
      details: [
        'Hızlı kayıt formu',
        'Toplu kursiyer aktarımı',
        'Kursiyer bilgi yönetimi',
        'Eğitmen atama'
      ]
    },
    {
      icon: <Calendar className="h-16 w-16 text-white" />,
      number: '02',
      title: 'Rezervasyon Planlama',
      description: 'Takvim üzerinden müsait saatleri görüntüleyin. Kursiyer için ders saati belirleyin. Eğitmen otomatik bilgilendirilir.',
      details: [
        'Görsel takvim arayüzü',
        'Müsaitlik kontrolü',
        'Çakışma önleme',
        'Anında onaylama'
      ]
    },
    {
      icon: <Bell className="h-16 w-16 text-white" />,
      number: '03',
      title: 'Otomatik Hatırlatma',
      description: 'Sistem ders saatinden önce otomatik SMS gönderir. Hem kursiyer hem eğitmen hatırlatma alır. Unutulan randevular minimize olur.',
      details: [
        'SMS otomasyonu',
        'Özelleştirilebilir mesajlar',
        'Zamanlama ayarları',
        'Teslimat takibi'
      ]
    }
  ]

  return (
    <div className="page-shell">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="section-title">Nasıl Çalışır?</h1>
          <p className="section-subtitle">
            3 basit adımda direksiyon ders yönetiminizi dijitalleştirin
          </p>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 text-8xl font-bold text-primary/10">
                    {step.number}
                  </div>
                  <div className="relative bg-gradient-to-br from-primary to-secondary p-12 rounded-2xl shadow-[0_24px_44px_rgba(20,44,94,0.25)]">
                    <div className="flex justify-center">
                      {step.icon}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <div>
                  <span className="text-primary font-bold text-lg">ADIM {step.number}</span>
                  <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">{step.title}</h2>
                  <p className="text-xl text-gray-600">{step.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {step.details.map((detail, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center space-x-2 rounded-lg border border-primary/15 bg-primary/8 p-3"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-gray-700 font-medium">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 panel-card p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Hemen Başlamaya Hazır mısınız?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Demo talep ederek sistemi ücretsiz deneyimleyin. Kurulum ve eğitim desteği bizden!
            </p>
            <Link to="/contact" className="btn-primary">
              Ücretsiz Demo Talep Et
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
