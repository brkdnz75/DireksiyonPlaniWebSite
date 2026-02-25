import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Users, Bell, Smartphone, CheckCircle, Clock, Settings, Building2, CalendarPlus, X } from 'lucide-react'
import DeviceFrame from '../components/DeviceFrame'

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
  const [activeTab, setActiveTab] = useState<'admin' | 'instructor' | 'student'>('admin')
  const [selectedImage, setSelectedImage] = useState<ScreenItem | null>(null)
  const [heroSlideIndex, setHeroSlideIndex] = useState(0)
  const [isHeroSlideVisible, setIsHeroSlideVisible] = useState(true)

  const heroSlides: HeroSlide[] = [
    { text: 'Kursiyerlerinizi toplu olarak veya tek tek sisteme ekleyin.', image: '/screens/hero-01-kursiyer-ekleme.png', label: 'Kursiyer Ekleme' },
    { text: 'Randevu oluşturun, iptal edin veya değiştirin.', image: '/screens/hero-02-randevu-yonetimi.png', label: 'Randevu Yönetimi' },
    { text: 'Kursiyerlerin ders sayısı, parkur kullanım sayısı ve ders notları gibi detaylara ulaşın.', image: '/screens/hero-03-kursiyer-detaylari.png', label: 'Kursiyer Detayları' },
    { text: 'Eğitmen ekleyin, izin takibi yapın ve ders kapama-açma işlemlerini gerçekleştirin.', image: '/screens/hero-04-egitmen-yonetimi.png', label: 'Eğitmen Yönetimi' },
    { text: 'Sınava hazır olan, derslerini tamamlayan ve başarılı ya da başarısız olan kursiyerler için çeşitli filtreler ve raporlamalar kullanın.', image: '/screens/hero-05-filtre-ve-raporlama.png', label: 'Filtre ve Raporlama' },
    { text: 'Ders limiti belirleyin ve limit aşımında uyarı alın.', image: '/screens/hero-06-ders-limitleri.png', label: 'Ders Limitleri' },
    { text: 'Kursiyerlerinize otomatik WhatsApp ve SMS ile ders hatırlatmaları ve rezervasyon bilgileri gönderin.', image: '/screens/hero-07-whatsapp-sms.png', label: 'WhatsApp ve SMS' },
    { text: 'Kursiyer memnuniyet anketi ile direksiyon derslerine dair olumlu veya olumsuz geri bildirimler alın.', image: '/screens/hero-08-memnuniyet-anketi.png', label: 'Memnuniyet Anketi' },
    { text: 'Direksiyon dersi planlamasını dijitalleştirin. Kursiyer rezervasyonlarını oluşturun, eğitmen programlarını yönetin, otomatik SMS hatırlatmaları ile ders kaçırmayı sıfıra indirin.', image: '/screens/hero-09-akilli-yonetim.png', label: 'Akıllı Yönetim' },
  ]

  const screenImages = {
    dashboard: '/screens/dashboard-yonetim-paneli.png',
    reservation: '/screens/rezervasyon-olusturma.png',
    instructorCalendar: '/screens/randevu-takvimi.png',
    studentList: '/screens/kursiyer-listesi.png',
    instructors: '/screens/egitmenler.png',
    vehicles: '/screens/araclar.png',
    institutionSettings: '/screens/kurum-ayarlari.png',
    instructorMobile: '/screens/egitmen-mobil-ders-takibi.png',
    studentPortal: '/screens/ogrenci-paneli-ders.png',
  } as const

  const features = [
    {
      icon: <CalendarPlus className="h-8 w-8 text-primary" />,
      title: 'Kursiyer Rezervasyon Oluşturma',
      description: 'Kursiyerleriniz kolayca direksiyon dersi rezervasyonu oluşturabilir'
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: 'Eğitmen Program Görüntüleme',
      description: 'Eğitmenleriniz günlük ve haftalık programlarını tek ekrandan takip eder'
    },
    {
      icon: <Bell className="h-8 w-8 text-primary" />,
      title: 'Otomatik SMS Hatırlatma',
      description: 'Ders saatinden önce otomatik hatırlatma mesajları gönderilir'
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: 'Kolay Takvim Yönetimi',
      description: 'Haftalık ve aylık görünümlerle tüm dersleri tek bakışta takip edin'
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: 'Mobil Uyumlu Kullanım',
      description: 'Her cihazdan erişilebilir, mobil ve tablet uyumlu arayüz'
    },
    {
      icon: <Building2 className="h-8 w-8 text-primary" />,
      title: 'Çoklu Kurs Desteği',
      description: 'Birden fazla şubeyi tek platformdan kolayca yönetin'
    }
  ]

  const screenshots: ScreenItem[] = [
    { variant: 'laptop', src: screenImages.reservation, alt: 'Rezervasyon ekran görüntüsü', label: 'Rezervasyon Oluşturma', fit: 'cover' },
    { variant: 'laptop', src: screenImages.instructorCalendar, alt: 'Randevu takvimi ekran görüntüsü', label: 'Randevu Takvimi', fit: 'cover' },
    { variant: 'laptop', src: screenImages.studentList, alt: 'Kursiyer listesi ekran görüntüsü', label: 'Kursiyer Listesi', fit: 'cover' },
    { variant: 'laptop', src: screenImages.instructors, alt: 'Eğitmenler ekran görüntüsü', label: 'Eğitmenler', fit: 'cover' },
    { variant: 'laptop', src: screenImages.vehicles, alt: 'Araçlar ekran görüntüsü', label: 'Araçlar', fit: 'cover' },
    { variant: 'laptop', src: screenImages.institutionSettings, alt: 'Kurum ayarları ekran görüntüsü', label: 'Kurum Ayarları', fit: 'cover' },
  ]

  const instructorShot: ScreenItem = {
    variant: 'phone',
    src: screenImages.instructorMobile,
    alt: 'Eğitmen mobil ders takibi ekran görüntüsü',
    label: 'Günlük Ders Takibi',
    fit: 'cover',
  }

  const studentShot: ScreenItem = {
    variant: 'phone',
    src: screenImages.studentPortal,
    alt: 'Öğrenci paneli ders takibi ekran görüntüsü',
    label: 'Öğrenci Ders Takibi',
    fit: 'cover',
  }

  const tabs = [
    { key: 'admin' as const, label: 'Yönetim Paneli' },
    { key: 'instructor' as const, label: 'Eğitmen Ekranı' },
    { key: 'student' as const, label: 'Öğrenci Ekranı' },
  ]

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

  const renderHeroMockup = () => (
    <div className="relative">
      <button
        type="button"
        onClick={() =>
          setSelectedImage({
            variant: 'laptop',
            src: currentHeroSlide.image,
            alt: `${currentHeroSlide.label} ekran görüntüsü`,
            label: currentHeroSlide.label,
            fit: 'cover',
          })
        }
        className="w-full text-left"
        aria-label={`${currentHeroSlide.label} detay görselini aç`}
      >
        <DeviceFrame variant="laptop">
          <img
            src={currentHeroSlide.image}
            alt={`${currentHeroSlide.label} ekran görüntüsü`}
            className={`w-full h-full object-cover transition-all duration-500 ${
              isHeroSlideVisible ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-[1.02] blur-[2px]'
            }`}
          />
        </DeviceFrame>
      </button>
      <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary/15 rounded-full blur-3xl -z-10" />
      <div className="absolute -top-8 -left-8 w-40 h-40 bg-secondary/15 rounded-full blur-3xl -z-10" />
    </div>
  )

  const renderScreen = (item: ScreenItem) => (
    <button
      type="button"
      onClick={() => setSelectedImage(item)}
      className="w-full text-left"
      aria-label={`${item.label} detay görselini aç`}
    >
      <DeviceFrame variant={item.variant}>
        <img
          src={item.src}
          alt={item.alt}
          className={`w-full h-full ${item.fit === 'contain' ? 'object-contain' : 'object-cover'}`}
          loading="lazy"
        />
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
                  {'Sürücü Kursları İçin'}
                  <span className="text-primary block"> {'Akıllı Rezervasyon'} </span>
                  {'Yönetim Sistemi'}
                </h1>
                <div className="md:hidden">
                  {renderHeroMockup()}
                </div>
                <div className="relative pl-5">
                  <div className="absolute left-0 top-1 h-[calc(100%-8px)] w-1 rounded-full bg-gradient-to-b from-primary to-secondary" />
                  <div className="min-h-[120px] md:min-h-[136px] flex items-center">
                    <p
                      className={`text-lg sm:text-xl text-slate-700 leading-relaxed transition-all duration-500 ${
                        isHeroSlideVisible
                          ? 'opacity-100 translate-y-0 blur-0'
                          : 'opacity-0 -translate-y-1 blur-[2px]'
                      }`}
                    >
                      {currentHeroSlide.text}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="btn-primary text-center">
                    {'Demo Talep Et'}
                  </Link>
                  <Link to="/features" className="btn-secondary text-center">
                    {'Özellikleri İncele'}
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                {renderHeroMockup()}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title">{'Direksiyon Ders Planlamanızı Dijitalleştirin'}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {'Bu yazılım, sürücü kurslarının direksiyon dersi planlamasını dijitalleştirir. Kursiyer rezervasyonları kolayca oluşturulur, eğitmenler günlük ve haftalık programlarını tek ekrandan görüntüler. Otomatik SMS hatırlatmaları sayesinde ders unutulmaları ortadan kalkar.'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              <div className="panel-card flex flex-col items-center p-6">
                <Settings className="h-8 w-8 text-primary mb-3" />
                <span className="font-semibold text-gray-900">{'Kolay Yönetim'}</span>
                <span className="text-sm text-gray-500 mt-1">{'Sade ve kullanıcı dostu arayüz'}</span>
              </div>
              <div className="panel-card flex flex-col items-center p-6">
                <Clock className="h-8 w-8 text-primary mb-3" />
                <span className="font-semibold text-gray-900">{'Zaman Tasarrufu'}</span>
                <span className="text-sm text-gray-500 mt-1">{'Kağıt işlerinden kurtulun'}</span>
              </div>
              <div className="panel-card flex flex-col items-center p-6">
                <CheckCircle className="h-8 w-8 text-primary mb-3" />
                <span className="font-semibold text-gray-900">{'Sıfır Unutulan Randevu'}</span>
                <span className="text-sm text-gray-500 mt-1">{'Otomatik SMS hatırlatma'}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">{'Uygulama Ekranları'}</h2>
              <p className="section-subtitle">{'Her kullanıcı rolü için özel tasarlanmış arayüzler'}</p>
            </div>

            <div className="flex justify-center gap-2 mb-12">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${activeTab === tab.key ? 'bg-primary text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
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
                    <h3 className="text-2xl font-bold text-gray-900">{'Eğitmen Mobil Ekranı'}</h3>
                    <p className="text-gray-600">{'Eğitmenler mobil uyumlu ekranlarından günlük ve haftalık derslerini görüntüleyebilir.'}</p>
                    <div className="space-y-3">
                      {[
                        'Günlük ve haftalık ders programı görüntüleme',
                        'Gelen ve gelmeyen öğrencileri işaretleme',
                        'Ders detaylarını kaydetme ve not ekleme',
                        'Kursiyer bilgilerine hızlı erişim',
                      ].map((item) => (
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
                    <h3 className="text-2xl font-bold text-gray-900">{'Öğrenci Paneli'}</h3>
                    <p className="text-gray-600">{'Öğrenciler kendi panellerinden tüm ders süreçlerini takip edebilir.'}</p>
                    <div className="space-y-3">
                      {[
                        'Tüm ders programını görüntüleme',
                        'Eğitmen ve araç bilgilerini görme',
                        'Ders memnuniyet anketini doldurma',
                        'Tamamlanan ve kalan ders sayısını takip',
                      ].map((item) => (
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
              <h2 className="section-title">{'Neden DireksiyonPlanı?'}</h2>
              <p className="section-subtitle">{'Sürücü kursu operasyonunuzu dijitalleştiren güçlü özellikler'}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                className="panel-card p-8 hover:border-primary/40 transition-all duration-300"
              >
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
            <h2 className="text-4xl font-bold mb-6">{'Hemen Başlayın'}</h2>
            <p className="text-xl mb-8 opacity-90">{'Kurumunuz için ücretsiz demo talep edin ve farkı görün'}</p>
            <Link to="/contact" className="inline-block bg-white text-primary font-semibold py-4 px-10 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-xl">
              {'Demo Talep Et'}
            </Link>
          </div>
        </section>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 p-4 sm:p-8" role="dialog" aria-modal="true" aria-label={`${selectedImage.label} detay görünümü`}>
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 z-20 rounded-full bg-white/15 p-2 text-white backdrop-blur-sm hover:bg-white/25"
            aria-label="Detayı kapat"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            type="button"
            className="absolute inset-0 z-0"
            onClick={() => setSelectedImage(null)}
            aria-label="Detayı kapat"
          />

          <div className="relative z-10 h-full w-full flex flex-col items-center justify-center gap-4">
            <p className="text-white text-lg font-semibold">{selectedImage.label}</p>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-[96vw] max-h-[80vh] w-auto h-auto rounded-xl bg-white p-2 shadow-2xl object-contain"
            />
          </div>
        </div>
      )}
    </>
  )
}
