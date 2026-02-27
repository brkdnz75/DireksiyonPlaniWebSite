import { Link } from 'react-router-dom'
import { Calendar, Users, Bell, Smartphone, BarChart3, Shield, Clock, Settings, FileText, Phone } from 'lucide-react'
import { useAppPreferences } from '../context/AppPreferences'

type FeatureItem = {
  icon: JSX.Element
  title: string
  description: string
  benefits: string[]
}

export default function Features() {
  const { language } = useAppPreferences()

  const featureIcons = [
    <Calendar className="h-12 w-12 text-primary" key="calendar" />,
    <Users className="h-12 w-12 text-primary" key="users" />,
    <Bell className="h-12 w-12 text-primary" key="bell" />,
    <Clock className="h-12 w-12 text-primary" key="clock" />,
    <Smartphone className="h-12 w-12 text-primary" key="phone" />,
    <BarChart3 className="h-12 w-12 text-primary" key="bar" />,
    <FileText className="h-12 w-12 text-primary" key="file" />,
    <Shield className="h-12 w-12 text-primary" key="shield" />,
    <Settings className="h-12 w-12 text-primary" key="settings" />,
    <Phone className="h-12 w-12 text-primary" key="support" />,
  ]

  const trFeatures: Omit<FeatureItem, 'icon'>[] = [
    {
      title: 'Kursiyer Rezervasyon Oluşturma',
      description:
        'Kursiyerleriniz kullanıcı dostu arayüz üzerinden kolayca direksiyon dersi rezervasyonu oluşturabilir. Müsait saatleri görüntüleyebilir ve anında rezervasyon yapabilirler.',
      benefits: ['Anında rezervasyon onayı', 'Müsait slot görüntüleme', 'Hızlı ve kolay işlem'],
    },
    {
      title: 'Eğitmen Program Yönetimi',
      description:
        'Eğitmenleriniz günlük ve haftalık programlarını tek ekrandan görüntüleyebilir. Hangi kursiyer ile ne zaman ders yapacaklarını kolayca takip edebilirler.',
      benefits: ['Günlük program görüntüleme', 'Haftalık takvim', 'Kursiyer bilgilerine hızlı erişim'],
    },
    {
      title: 'Otomatik SMS Hatırlatma',
      description:
        'Sistem, ders saatinden önce hem kursiyere hem de eğitmene otomatik SMS hatırlatması gönderir. Unutulan randevuları minimize edin.',
      benefits: ['Otomatik SMS gönderimi', 'Özelleştirilebilir mesajlar', 'Zamanlama ayarları'],
    },
    {
      title: 'Kolay Takvim Yönetimi',
      description:
        'Haftalık ve aylık görünümler ile tüm rezervasyonları tek bakışta görün. Sürükle-bırak ile rezervasyonları kolayca düzenleyin.',
      benefits: ['Görsel takvim arayüzü', 'Sürükle-bırak özelliği', 'Çoklu görünüm seçenekleri'],
    },
    {
      title: 'Mobil Uyumlu Kullanım',
      description:
        'Responsive tasarım sayesinde masaüstü, tablet ve mobil cihazlardan sorunsuz erişim. Her yerden yönetim imkanı.',
      benefits: ['Tam mobil uyumluluk', 'Tablet desteği', 'Tarayıcı bağımsız çalışma'],
    },
    {
      title: 'Çoklu Kurs Yönetimi',
      description: 'Birden fazla sürücü kursunu tek platformdan yönetin. Şube bazlı raporlama ve takip.',
      benefits: ['Çoklu şube desteği', 'Merkezi yönetim', 'Şube bazlı raporlar'],
    },
    {
      title: 'Detaylı Raporlama',
      description: 'Tamamlanan dersler, eğitmen performansı ve kursiyer aktivitelerini detaylı raporlarla takip edin.',
      benefits: ['Excel çıktısı', 'Performans grafikleri', 'Özelleştirilebilir raporlar'],
    },
    {
      title: 'Güvenli Veri Saklama',
      description:
        'Tüm verileriniz güvenli sunucularda şifrelenerek saklanır. Düzenli yedekleme ile veri kaybı riski sıfıra iner.',
      benefits: ['SSL şifreleme', 'Otomatik yedekleme', 'KVKK uyumlu'],
    },
    {
      title: 'Özelleştirilebilir Ayarlar',
      description: 'Kurs saatlerini, ders sürelerini ve çalışma günlerini kendi ihtiyaçlarınıza göre ayarlayın.',
      benefits: ['Esnek zaman ayarları', 'Tatil günü tanımlama', 'Ders süresi ayarı'],
    },
    {
      title: '7/24 Destek',
      description: 'Teknik destek ekibimiz her zaman yanınızda. Sorunlarınız hızlıca çözülür.',
      benefits: ['Anlık destek', 'Uzaktan yardım', 'Eğitim desteği'],
    },
  ]

  const enFeatures: Omit<FeatureItem, 'icon'>[] = [
    {
      title: 'Student Booking Creation',
      description:
        'Your students can easily create driving lesson bookings through a user-friendly interface. They can view available time slots and book instantly.',
      benefits: ['Instant booking confirmation', 'Available slot visibility', 'Fast and simple flow'],
    },
    {
      title: 'Instructor Schedule Management',
      description:
        'Your instructors can view daily and weekly schedules from a single screen and easily track which student they will teach and when.',
      benefits: ['Daily schedule view', 'Weekly calendar', 'Quick access to student details'],
    },
    {
      title: 'Automatic SMS Reminders',
      description:
        'The system sends automatic reminders to both student and instructor before each lesson. Reduce missed appointments significantly.',
      benefits: ['Automatic SMS delivery', 'Customizable templates', 'Flexible timing setup'],
    },
    {
      title: 'Easy Calendar Control',
      description:
        'See all bookings in weekly and monthly views at a glance. Reorganize reservations easily with drag-and-drop.',
      benefits: ['Visual calendar interface', 'Drag-and-drop support', 'Multiple view modes'],
    },
    {
      title: 'Mobile-Ready Experience',
      description: 'A responsive interface for desktop, tablet and mobile. Manage your operations from anywhere.',
      benefits: ['Fully mobile responsive', 'Tablet optimized', 'Browser independent'],
    },
    {
      title: 'Multi-Branch Management',
      description: 'Manage multiple driving schools from one platform with branch-based reporting and tracking.',
      benefits: ['Multi-branch support', 'Centralized control', 'Branch-level reports'],
    },
    {
      title: 'Detailed Reporting',
      description: 'Track completed lessons, instructor performance and student activity with advanced reports.',
      benefits: ['Excel export', 'Performance charts', 'Custom reporting'],
    },
    {
      title: 'Secure Data Storage',
      description:
        'All data is stored encrypted on secure servers. Regular backups minimize the risk of data loss.',
      benefits: ['SSL encryption', 'Automated backups', 'Compliance-friendly'],
    },
    {
      title: 'Flexible Configuration',
      description: 'Set lesson hours, lesson durations and workdays based on your operational needs.',
      benefits: ['Flexible time settings', 'Holiday definitions', 'Lesson duration setup'],
    },
    {
      title: '24/7 Support',
      description: 'Our technical support team is always available and resolves issues quickly.',
      benefits: ['Real-time support', 'Remote assistance', 'Training support'],
    },
  ]

  const features = (language === 'en' ? enFeatures : trFeatures).map((item, index) => ({
    ...item,
    icon: featureIcons[index],
  })) as FeatureItem[]

  const copy =
    language === 'en'
      ? {
          title: 'Powerful Features',
          subtitle: 'Comprehensive capabilities that simplify your driving school operations',
          more: 'Explore More',
          moreDesc: 'Try all features with a free demo',
          cta: 'Book Demo',
        }
      : {
          title: 'Güçlü Özellikler',
          subtitle: 'Sürücü kursu operasyonunuzu kolaylaştıran kapsamlı özellikler',
          more: 'Daha Fazlasını Keşfedin',
          moreDesc: 'Ücretsiz demo ile tüm özellikleri deneyimleyin',
          cta: 'Demo Talep Et',
        }

  return (
    <div className="page-shell">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="section-title">{copy.title}</h1>
          <p className="section-subtitle">{copy.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="panel-card p-8 border-2 border-transparent hover:border-primary/35 hover:shadow-[0_24px_42px_rgba(20,44,94,0.14)] transition-all duration-300"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="space-y-2">
                {feature.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center panel-card bg-gradient-to-r from-primary/10 to-secondary/10 p-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">{copy.more}</h2>
          <p className="text-xl text-gray-600 mb-8">{copy.moreDesc}</p>
          <Link to="/contact" className="btn-primary">
            {copy.cta}
          </Link>
        </div>
      </div>
    </div>
  )
}
