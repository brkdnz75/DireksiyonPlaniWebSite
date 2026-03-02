import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Users, Bell, Smartphone, CheckCircle, Clock, Settings, Building2, CalendarPlus, X } from 'lucide-react'
import DeviceFrame from '../components/DeviceFrame'
import { useAppPreferences } from '../context/AppPreferences'

type ScreenVariant = 'laptop' | 'tablet' | 'phone'
type ScreenFit = 'cover' | 'contain'

type ScreenItem = {
  variant: ScreenVariant
  src: string
  alt: string
  label: string
  fit: ScreenFit
}

type HeroSlide = {
  text: string
  image: string
  label: string
}

export default function Home() {
  const { language } = useAppPreferences()
  const [activeTab, setActiveTab] = useState<'admin' | 'instructor' | 'student'>('admin')
  const [selectedImage, setSelectedImage] = useState<ScreenItem | null>(null)
  const [heroSlideIndex, setHeroSlideIndex] = useState(0)
  const [isHeroSlideVisible, setIsHeroSlideVisible] = useState(true)

  const isEn = language === 'en'

  const heroSlides: HeroSlide[] = isEn
    ? [
        { text: 'Add students in bulk or one by one.', image: '/screens/hero-01-kursiyer-ekleme.png', label: 'Student Onboarding' },
        { text: 'Create, cancel or update lesson reservations.', image: '/screens/hero-02-randevu-yonetimi.png', label: 'Reservation Management' },
        {
          text: 'Track lesson count, exam status, field usage and instructor notes from one profile.',
          image: '/screens/hero-03-kursiyer-detaylari.png',
          label: 'Student Details',
        },
        {
          text: 'Add instructors, manage availability and control lesson open/close flow.',
          image: '/screens/hero-04-egitmen-yonetimi.png',
          label: 'Instructor Management',
        },
        {
          text: 'Use advanced filters and reports for ready, completed and unsuccessful students.',
          image: '/screens/hero-05-filtre-ve-raporlama.png',
          label: 'Filters and Reports',
        },
        { text: 'Set lesson limits and get alerted before overuse.', image: '/screens/hero-06-ders-limitleri.png', label: 'Lesson Limits' },
        {
          text: 'Send automatic WhatsApp and SMS reminders with reservation details.',
          image: '/screens/hero-07-whatsapp-sms.png',
          label: 'WhatsApp and SMS',
        },
        {
          text: 'Collect positive and negative feedback with student satisfaction surveys.',
          image: '/screens/hero-08-memnuniyet-anketi.png',
          label: 'Satisfaction Survey',
        },
        {
          text: 'Digitize scheduling end-to-end: bookings, instructor planning and reminder automation.',
          image: '/screens/hero-09-akilli-yonetim.png',
          label: 'Smart Operations',
        },
        {
          text: 'You can easily view the tracks students are currently practicing and the total number of tracks they complete at the end of all lessons on a single screen.',
          image: '/screens/hero-10-kursiyer-ders-detay.png',
          label: 'Student Lesson Detail',
        },
      ]
    : [
        { text: 'Kursiyerlerinizi toplu olarak veya tek tek sisteme ekleyin.', image: '/screens/hero-01-kursiyer-ekleme.png', label: 'Kursiyer Ekleme' },
        { text: 'Randevu oluşturun, iptal edin veya değiştirin.', image: '/screens/hero-02-randevu-yonetimi.png', label: 'Randevu Yönetimi' },
        {
          text: 'Kursiyerlerin ders sayısı, parkur kullanım sayısı ve ders notları gibi detaylara ulaşın.',
          image: '/screens/hero-03-kursiyer-detaylari.png',
          label: 'Kursiyer Detayları',
        },
        {
          text: 'Eğitmen ekleyin, izin takibi yapın ve ders kapama-açma işlemlerini gerçekleştirin.',
          image: '/screens/hero-04-egitmen-yonetimi.png',
          label: 'Eğitmen Yönetimi',
        },
        {
          text: 'Sınava hazır olan, derslerini tamamlayan ve başarılı ya da başarısız olan kursiyerler için filtreler ve raporlar kullanın.',
          image: '/screens/hero-05-filtre-ve-raporlama.png',
          label: 'Filtre ve Raporlama',
        },
        { text: 'Ders limiti belirleyin ve limit aşımında uyarı alın.', image: '/screens/hero-06-ders-limitleri.png', label: 'Ders Limitleri' },
        {
          text: 'Kursiyerlerinize otomatik WhatsApp ve SMS ile ders hatırlatmaları ve rezervasyon bilgileri gönderin.',
          image: '/screens/hero-07-whatsapp-sms.png',
          label: 'WhatsApp ve SMS',
        },
        {
          text: 'Kursiyer memnuniyet anketi ile direksiyon derslerine dair geri bildirimler alın.',
          image: '/screens/hero-08-memnuniyet-anketi.png',
          label: 'Memnuniyet Anketi',
        },
        {
          text: 'Direksiyon dersi planlamasını dijitalleştirin. Kursiyer rezervasyonlarını oluşturun, eğitmen programlarını yönetin, otomatik SMS hatırlatmaları ile ders kaçırmayı sıfıra indirin.',
          image: '/screens/hero-09-akilli-yonetim.png',
          label: 'Akıllı Yönetim',
        },
        {
          text: 'Kursiyerlerin anlık olarak uyguladığı parkurları ve tüm dersler sonunda tamamladıkları toplam parkur sayılarını tek bir ekrandan kolayca görüntüleyebilirsiniz.',
          image: '/screens/hero-10-kursiyer-ders-detay.png',
          label: 'Kursiyer Ders Detay',
        },
      ]

  const screenImages = {
    dashboard: '/screens/dashboard-yonetim-paneli.png',
    reservation: '/screens/rezervasyon-olusturma.png',
    instructorCalendar: '/screens/randevu-takvimi.png',
    studentList: '/screens/kursiyer-listesi.png',
    studentLessonDetail: '/screens/kursiyer-ders-detay.png',
    instructors: '/screens/egitmenler.png',
    vehicles: '/screens/araclar.png',
    institutionSettings: '/screens/kurum-ayarlari.png',
    instructorMobile: '/screens/egitmen-mobil-ders-takibi.png',
    studentPortal: '/screens/ogrenci-paneli-ders.png',
  } as const

  const features = isEn
    ? [
        {
          icon: <CalendarPlus className="h-8 w-8 text-primary" />,
          title: 'Student Reservation Creation',
          description: 'Students can create driving lesson reservations quickly',
        },
        {
          icon: <Users className="h-8 w-8 text-primary" />,
          title: 'Instructor Schedule View',
          description: 'Instructors follow daily and weekly plans from one screen',
        },
        {
          icon: <Bell className="h-8 w-8 text-primary" />,
          title: 'Automatic SMS Reminders',
          description: 'Reminder messages are sent before lesson time',
        },
        {
          icon: <Calendar className="h-8 w-8 text-primary" />,
          title: 'Simple Calendar Management',
          description: 'Track all lessons with weekly and monthly views',
        },
        {
          icon: <Smartphone className="h-8 w-8 text-primary" />,
          title: 'Mobile-Ready Experience',
          description: 'Accessible from any device with responsive layouts',
        },
        {
          icon: <Building2 className="h-8 w-8 text-primary" />,
          title: 'Multi-Branch Support',
          description: 'Manage multiple branches from a single platform',
        },
      ]
    : [
        {
          icon: <CalendarPlus className="h-8 w-8 text-primary" />,
          title: 'Kursiyer Rezervasyon Oluşturma',
          description: 'Kursiyerleriniz kolayca direksiyon dersi rezervasyonu oluşturabilir',
        },
        {
          icon: <Users className="h-8 w-8 text-primary" />,
          title: 'Eğitmen Program Görüntüleme',
          description: 'Eğitmenleriniz günlük ve haftalık programlarını tek ekrandan takip eder',
        },
        {
          icon: <Bell className="h-8 w-8 text-primary" />,
          title: 'Otomatik SMS Hatırlatma',
          description: 'Ders saatinden önce otomatik hatırlatma mesajları gönderilir',
        },
        {
          icon: <Calendar className="h-8 w-8 text-primary" />,
          title: 'Kolay Takvim Yönetimi',
          description: 'Haftalık ve aylık görünümlerle tüm dersleri tek bakışta takip edin',
        },
        {
          icon: <Smartphone className="h-8 w-8 text-primary" />,
          title: 'Mobil Uyumlu Kullanım',
          description: 'Her cihazdan erişilebilir, mobil ve tablet uyumlu arayüz',
        },
        {
          icon: <Building2 className="h-8 w-8 text-primary" />,
          title: 'Çoklu Kurs Desteği',
          description: 'Birden fazla şubeyi tek platformdan kolayca yönetin',
        },
      ]

  const screenshots: ScreenItem[] = isEn
    ? [
        { variant: 'laptop', src: screenImages.reservation, alt: 'Reservation screen', label: 'Reservation Creation', fit: 'cover' },
        { variant: 'laptop', src: screenImages.instructorCalendar, alt: 'Calendar screen', label: 'Lesson Calendar', fit: 'cover' },
        { variant: 'laptop', src: screenImages.studentList, alt: 'Student list screen', label: 'Student List', fit: 'cover' },
        { variant: 'laptop', src: screenImages.studentLessonDetail, alt: 'Student lesson detail screen', label: 'Student Lesson Detail', fit: 'cover' },
        { variant: 'laptop', src: screenImages.instructors, alt: 'Instructor screen', label: 'Instructors', fit: 'cover' },
        { variant: 'laptop', src: screenImages.vehicles, alt: 'Vehicles screen', label: 'Vehicles', fit: 'cover' },
        { variant: 'laptop', src: screenImages.institutionSettings, alt: 'Institution settings screen', label: 'Institution Settings', fit: 'cover' },
      ]
    : [
        { variant: 'laptop', src: screenImages.reservation, alt: 'Rezervasyon ekran görüntüsü', label: 'Rezervasyon Oluşturma', fit: 'cover' },
        { variant: 'laptop', src: screenImages.instructorCalendar, alt: 'Randevu takvimi ekran görüntüsü', label: 'Randevu Takvimi', fit: 'cover' },
        { variant: 'laptop', src: screenImages.studentList, alt: 'Kursiyer listesi ekran görüntüsü', label: 'Kursiyer Listesi', fit: 'cover' },
        { variant: 'laptop', src: screenImages.studentLessonDetail, alt: 'Kursiyer ders detay ekran görüntüsü', label: 'Kursiyer Ders Detay', fit: 'cover' },
        { variant: 'laptop', src: screenImages.instructors, alt: 'Eğitmenler ekran görüntüsü', label: 'Eğitmenler', fit: 'cover' },
        { variant: 'laptop', src: screenImages.vehicles, alt: 'Araçlar ekran görüntüsü', label: 'Araçlar', fit: 'cover' },
        { variant: 'laptop', src: screenImages.institutionSettings, alt: 'Kurum ayarları ekran görüntüsü', label: 'Kurum Ayarları', fit: 'cover' },
      ]

  const instructorShot: ScreenItem = isEn
    ? {
        variant: 'phone',
        src: screenImages.instructorMobile,
        alt: 'Instructor mobile lesson tracking screen',
        label: 'Daily Lesson Tracking',
        fit: 'cover',
      }
    : {
        variant: 'phone',
        src: screenImages.instructorMobile,
        alt: 'Eğitmen mobil ders takibi ekran görüntüsü',
        label: 'Günlük Ders Takibi',
        fit: 'cover',
      }

  const studentShot: ScreenItem = isEn
    ? {
        variant: 'phone',
        src: screenImages.studentPortal,
        alt: 'Student panel lesson tracking screen',
        label: 'Student Lesson Tracking',
        fit: 'cover',
      }
    : {
        variant: 'phone',
        src: screenImages.studentPortal,
        alt: 'Öğrenci paneli ders takibi ekran görüntüsü',
        label: 'Öğrenci Ders Takibi',
        fit: 'cover',
      }

  const tabs = isEn
    ? [
        { key: 'admin' as const, label: 'Admin Panel' },
        { key: 'instructor' as const, label: 'Instructor View' },
        { key: 'student' as const, label: 'Student View' },
      ]
    : [
        { key: 'admin' as const, label: 'Yönetim Paneli' },
        { key: 'instructor' as const, label: 'Eğitmen Ekranı' },
        { key: 'student' as const, label: 'Öğrenci Ekranı' },
      ]

  const copy = isEn
    ? {
        heroTop: 'For Driving Schools',
        heroHighlight: 'Smart Reservation',
        heroBottom: 'Management Platform',
        ctaDemo: 'Book Demo',
        ctaFeatures: 'Explore Features',
        digitizeTitle: 'Digitize Your Driving Lesson Operations',
        digitizeDesc:
          'This platform digitizes scheduling for driving schools. Student bookings are created quickly, instructors track plans in one screen, and automatic reminders prevent missed lessons.',
        easyManagement: 'Easy Management',
        easyManagementDesc: 'Simple and practical interface',
        timeSave: 'Save Time',
        timeSaveDesc: 'Replace manual paperwork',
        zeroMissed: 'Zero Missed Lessons',
        zeroMissedDesc: 'Automated reminder flow',
        appScreens: 'Application Screens',
        appScreensDesc: 'Dedicated interfaces for each user role',
        instructorTitle: 'Instructor Mobile View',
        instructorDesc: 'Instructors can review daily and weekly lessons from mobile optimized screens.',
        instructorPoints: [
          'View daily and weekly lesson schedules',
          'Mark attended and missed students',
          'Save lesson details and notes',
          'Quick access to student information',
        ],
        studentTitle: 'Student Panel',
        studentDesc: 'Students can track all lesson activities directly from their panel.',
        studentPoints: [
          'View complete lesson schedule',
          'See instructor and vehicle details',
          'Submit lesson satisfaction survey',
          'Track completed and remaining lessons',
        ],
        whyTitle: 'Why DireksiyonPlanı?',
        whyDesc: 'Strong capabilities to digitize driving school operations',
        startTitle: 'Get Started Today',
        startDesc: 'Request a free demo for your institution and see the difference',
        closeDetail: 'Close preview',
      }
    : {
        heroTop: 'Sürücü Kursları İçin',
        heroHighlight: 'Akıllı Rezervasyon',
        heroBottom: 'Yönetim Sistemi',
        ctaDemo: 'Demo Talep Et',
        ctaFeatures: 'Özellikleri İncele',
        digitizeTitle: 'Direksiyon Ders Planlamanızı Dijitalleştirin',
        digitizeDesc:
          'Bu yazılım, sürücü kurslarının direksiyon dersi planlamasını dijitalleştirir. Kursiyer rezervasyonları kolayca oluşturulur, eğitmenler günlük ve haftalık programlarını tek ekrandan görüntüler. Otomatik SMS hatırlatmaları sayesinde ders unutulmaları ortadan kalkar.',
        easyManagement: 'Kolay Yönetim',
        easyManagementDesc: 'Sade ve kullanıcı dostu arayüz',
        timeSave: 'Zaman Tasarrufu',
        timeSaveDesc: 'Kağıt işlerinden kurtulun',
        zeroMissed: 'Sıfır Unutulan Randevu',
        zeroMissedDesc: 'Otomatik SMS hatırlatma',
        appScreens: 'Uygulama Ekranları',
        appScreensDesc: 'Her kullanıcı rolü için özel tasarlanmış arayüzler',
        instructorTitle: 'Eğitmen Mobil Ekranı',
        instructorDesc: 'Eğitmenler mobil uyumlu ekranlarından günlük ve haftalık derslerini görüntüleyebilir.',
        instructorPoints: [
          'Günlük ve haftalık ders programı görüntüleme',
          'Gelen ve gelmeyen öğrencileri işaretleme',
          'Ders detaylarını kaydetme ve not ekleme',
          'Kursiyer bilgilerine hızlı erişim',
        ],
        studentTitle: 'Öğrenci Paneli',
        studentDesc: 'Öğrenciler kendi panellerinden tüm ders süreçlerini takip edebilir.',
        studentPoints: [
          'Tüm ders programını görüntüleme',
          'Eğitmen ve araç bilgilerini görme',
          'Ders memnuniyet anketini doldurma',
          'Tamamlanan ve kalan ders sayısını takip',
        ],
        whyTitle: 'Neden DireksiyonPlanı?',
        whyDesc: 'Sürücü kursu operasyonunuzu dijitalleştiren güçlü özellikler',
        startTitle: 'Hemen Başlayın',
        startDesc: 'Kurumunuz için ücretsiz demo talep edin ve farkı görün',
        closeDetail: 'Detayı kapat',
      }

  const currentHeroSlide = heroSlides[heroSlideIndex]

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImage(null)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    let fadeTimeout: number | null = null

    const interval = window.setInterval(() => {
      setIsHeroSlideVisible(false)
      fadeTimeout = window.setTimeout(() => {
        setHeroSlideIndex((prev) => (prev + 1) % heroSlides.length)
        setIsHeroSlideVisible(true)
      }, 280)
    }, 5200)

    return () => {
      window.clearInterval(interval)
      if (fadeTimeout) {
        window.clearTimeout(fadeTimeout)
      }
    }
  }, [heroSlides.length])

  const renderScreen = (item: ScreenItem) => (
    <button type="button" onClick={() => setSelectedImage(item)} className="w-full text-left" aria-label={`${item.label} detail`}>
      <DeviceFrame variant={item.variant}>
        <img src={item.src} alt={item.alt} className={`w-full h-full ${item.fit === 'contain' ? 'object-contain' : 'object-cover'}`} loading="lazy" />
      </DeviceFrame>
      <p className="text-center text-gray-700 font-semibold mt-4">{item.label}</p>
    </button>
  )

  return (
    <>
      <div>
        <section className="bg-gradient-to-br from-primary/5 via-white to-secondary/5 py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  {copy.heroTop}
                  <span className="text-primary block"> {copy.heroHighlight} </span>
                  {copy.heroBottom}
                </h1>
                <div className="relative pl-5">
                  <div className="absolute left-0 top-1 h-[calc(100%-8px)] w-1 rounded-full bg-gradient-to-b from-primary to-secondary" />
                  <div className="min-h-[120px] md:min-h-[136px] flex items-center">
                    <p
                      className={`text-lg sm:text-xl text-slate-700 leading-relaxed transition-all duration-500 ${
                        isHeroSlideVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 -translate-y-1 blur-[2px]'
                      }`}
                    >
                      {currentHeroSlide.text}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="btn-primary text-center">
                    {copy.ctaDemo}
                  </Link>
                  <Link to="/features" className="btn-secondary text-center">
                    {copy.ctaFeatures}
                  </Link>
                </div>
              </div>
              <div className="relative">
                <button
                  type="button"
                  onClick={() =>
                    setSelectedImage({
                      variant: 'laptop',
                      src: currentHeroSlide.image,
                      alt: `${currentHeroSlide.label} screen`,
                      label: currentHeroSlide.label,
                      fit: 'cover',
                    })
                  }
                  className="w-full text-left"
                  aria-label={`${currentHeroSlide.label} detail`}
                >
                  <DeviceFrame variant="laptop">
                    <img
                      src={currentHeroSlide.image}
                      alt={`${currentHeroSlide.label} screen`}
                      className={`w-full h-full object-cover transition-all duration-500 ${
                        isHeroSlideVisible ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-[1.02] blur-[2px]'
                      }`}
                    />
                  </DeviceFrame>
                </button>
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary/15 rounded-full blur-3xl -z-10" />
                <div className="absolute -top-8 -left-8 w-40 h-40 bg-secondary/15 rounded-full blur-3xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title">{copy.digitizeTitle}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{copy.digitizeDesc}</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              <div className="panel-card flex flex-col items-center p-6">
                <Settings className="h-8 w-8 text-primary mb-3" />
                <span className="font-semibold text-gray-900">{copy.easyManagement}</span>
                <span className="text-sm text-gray-500 mt-1">{copy.easyManagementDesc}</span>
              </div>
              <div className="panel-card flex flex-col items-center p-6">
                <Clock className="h-8 w-8 text-primary mb-3" />
                <span className="font-semibold text-gray-900">{copy.timeSave}</span>
                <span className="text-sm text-gray-500 mt-1">{copy.timeSaveDesc}</span>
              </div>
              <div className="panel-card flex flex-col items-center p-6">
                <CheckCircle className="h-8 w-8 text-primary mb-3" />
                <span className="font-semibold text-gray-900">{copy.zeroMissed}</span>
                <span className="text-sm text-gray-500 mt-1">{copy.zeroMissedDesc}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">{copy.appScreens}</h2>
              <p className="section-subtitle">{copy.appScreensDesc}</p>
            </div>

            <div className="flex justify-center gap-2 mb-12">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === tab.key ? 'bg-primary text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {activeTab === 'admin' && (
              <div className="grid md:grid-cols-2 gap-10">
                {screenshots.map((item) => (
                  <div key={item.label} className="screenshot-card">
                    {renderScreen(item)}
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'instructor' && (
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-10 items-start">
                  <div className="screenshot-card">{renderScreen(instructorShot)}</div>
                  <div className="space-y-6 py-8">
                    <h3 className="text-2xl font-bold text-gray-900">{copy.instructorTitle}</h3>
                    <p className="text-gray-600">{copy.instructorDesc}</p>
                    <div className="space-y-3">
                      {copy.instructorPoints.map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'student' && (
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-10 items-start">
                  <div className="screenshot-card">{renderScreen(studentShot)}</div>
                  <div className="space-y-6 py-8">
                    <h3 className="text-2xl font-bold text-gray-900">{copy.studentTitle}</h3>
                    <p className="text-gray-600">{copy.studentDesc}</p>
                    <div className="space-y-3">
                      {copy.studentPoints.map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="section-title">{copy.whyTitle}</h2>
              <p className="section-subtitle">{copy.whyDesc}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="panel-card p-8 hover:border-primary/40 transition-all duration-300">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">{copy.startTitle}</h2>
            <p className="text-xl mb-8 opacity-90">{copy.startDesc}</p>
            <Link to="/contact" className="inline-block bg-white text-primary font-semibold py-4 px-10 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-xl">
              {copy.ctaDemo}
            </Link>
          </div>
        </section>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 p-4 sm:p-8" role="dialog" aria-modal="true" aria-label={`${selectedImage.label} detail`}>
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 z-20 rounded-full bg-white/15 p-2 text-white backdrop-blur-sm hover:bg-white/25"
            aria-label={copy.closeDetail}
          >
            <X className="h-6 w-6" />
          </button>

          <button type="button" className="absolute inset-0 z-0" onClick={() => setSelectedImage(null)} aria-label={copy.closeDetail} />

          <div className="relative z-10 h-full w-full flex flex-col items-center justify-center gap-4">
            <p className="text-white text-lg font-semibold">{selectedImage.label}</p>
            <img src={selectedImage.src} alt={selectedImage.alt} className="max-w-[96vw] max-h-[80vh] w-auto h-auto rounded-xl bg-white p-2 shadow-2xl object-contain" />
          </div>
        </div>
      )}
    </>
  )
}
