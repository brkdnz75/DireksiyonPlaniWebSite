import { Link } from 'react-router-dom'
import { UserPlus, Calendar, Bell } from 'lucide-react'
import { useAppPreferences } from '../context/AppPreferences'

type StepItem = {
  icon: JSX.Element
  number: string
  title: string
  description: string
  details: string[]
}

export default function HowItWorks() {
  const { language } = useAppPreferences()

  const icons = [
    <UserPlus className="h-16 w-16 text-white" key="userplus" />,
    <Calendar className="h-16 w-16 text-white" key="calendar" />,
    <Bell className="h-16 w-16 text-white" key="bell" />,
  ]

  const trSteps: Omit<StepItem, 'icon'>[] = [
    {
      number: '01',
      title: 'Kursiyer Ekleme',
      description:
        'Yeni kursiyerleri sisteme ekleyin. İsim, telefon ve eğitmen bilgilerini girin. Kursiyer hesabı otomatik oluşturulur.',
      details: ['Hızlı kayıt formu', 'Toplu kursiyer aktarımı', 'Kursiyer bilgi yönetimi', 'Eğitmen atama'],
    },
    {
      number: '02',
      title: 'Rezervasyon Planlama',
      description:
        'Takvim üzerinden müsait saatleri görüntüleyin. Kursiyer için ders saati belirleyin. Eğitmen otomatik bilgilendirilir.',
      details: ['Görsel takvim arayüzü', 'Müsaitlik kontrolü', 'Çakışma önleme', 'Anında onaylama'],
    },
    {
      number: '03',
      title: 'Otomatik Hatırlatma',
      description:
        'Sistem ders saatinden önce otomatik SMS gönderir. Hem kursiyer hem eğitmen hatırlatma alır. Unutulan randevular minimize olur.',
      details: ['SMS otomasyonu', 'Özelleştirilebilir mesajlar', 'Zamanlama ayarları', 'Teslimat takibi'],
    },
  ]

  const enSteps: Omit<StepItem, 'icon'>[] = [
    {
      number: '01',
      title: 'Add Students',
      description:
        'Add new students to the system. Enter name, phone and instructor details. Student account is created automatically.',
      details: ['Fast registration form', 'Bulk student import', 'Student profile management', 'Instructor assignment'],
    },
    {
      number: '02',
      title: 'Plan Bookings',
      description:
        'View available time slots in the calendar. Assign lesson time for the student. Instructor is notified automatically.',
      details: ['Visual calendar UI', 'Availability check', 'Conflict prevention', 'Instant confirmation'],
    },
    {
      number: '03',
      title: 'Automatic Reminders',
      description:
        'The system sends automatic SMS reminders before lessons. Both student and instructor receive reminders.',
      details: ['SMS automation', 'Custom templates', 'Timing configuration', 'Delivery tracking'],
    },
  ]

  const steps = (language === 'en' ? enSteps : trSteps).map((step, index) => ({
    ...step,
    icon: icons[index],
  })) as StepItem[]

  const copy =
    language === 'en'
      ? {
          title: 'How It Works?',
          subtitle: 'Digitize your lesson operations in 3 simple steps',
          step: 'STEP',
          finalTitle: 'Ready to Get Started?',
          finalDescription: 'Request a free demo and test the system. Setup and training support included.',
          cta: 'Request Free Demo',
        }
      : {
          title: 'Nasıl Çalışır?',
          subtitle: '3 basit adımda direksiyon ders yönetiminizi dijitalleştirin',
          step: 'ADIM',
          finalTitle: 'Hemen Başlamaya Hazır mısınız?',
          finalDescription: 'Demo talep ederek sistemi ücretsiz deneyimleyin. Kurulum ve eğitim desteği bizden!',
          cta: 'Ücretsiz Demo Talep Et',
        }

  return (
    <div className="page-shell">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="section-title">{copy.title}</h1>
          <p className="section-subtitle">{copy.subtitle}</p>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute -top-10 md:-top-12 -left-6 text-8xl font-bold text-primary/10">{step.number}</div>
                  <div className="relative bg-gradient-to-br from-primary to-secondary p-12 rounded-2xl shadow-[0_24px_44px_rgba(20,44,94,0.25)]">
                    <div className="flex justify-center">{step.icon}</div>
                  </div>
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <div>
                  <span className="text-primary font-bold text-lg">
                    {copy.step} {step.number}
                  </span>
                  <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">{step.title}</h2>
                  <p className="text-xl text-gray-600">{step.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {step.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center space-x-2 rounded-lg border border-primary/15 bg-primary/8 p-3">
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
            <h2 className="text-3xl font-bold mb-4 text-gray-900">{copy.finalTitle}</h2>
            <p className="text-xl text-gray-600 mb-8">{copy.finalDescription}</p>
            <Link to="/contact" className="btn-primary">
              {copy.cta}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
