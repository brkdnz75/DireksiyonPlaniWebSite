import { Link } from 'react-router-dom'
import { Calendar, Users, Bell, Smartphone, BarChart3, Shield, Clock, Settings, FileText, Phone } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <Calendar className="h-12 w-12 text-primary" />,
      title: 'Kursiyer Rezervasyon Oluşturma',
      description: 'Kursiyerleriniz kullanıcı dostu arayüz üzerinden kolayca direksiyon dersi rezervasyonu oluşturabilir. Müsait saatleri görüntüleyebilir ve anında rezervasyon yapabilirler.',
      benefits: ['Anında rezervasyon onayı', 'Müsait slot görüntüleme', 'Hızlı ve kolay işlem']
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: 'Eğitmen Program Yönetimi',
      description: 'Eğitmenleriniz günlük ve haftalık programlarını tek ekrandan görüntüleyebilir. Hangi kursiyer ile ne zaman ders yapacaklarını kolayca takip edebilirler.',
      benefits: ['Günlük program görüntüleme', 'Haftalık takvim', 'Kursiyer bilgilerine hızlı erişim']
    },
    {
      icon: <Bell className="h-12 w-12 text-primary" />,
      title: 'Otomatik SMS Hatırlatma',
      description: 'Sistem, ders saatinden önce hem kursiyere hem de eğitmene otomatik SMS hatırlatması gönderir. Unutulan randevuları minimize edin.',
      benefits: ['Otomatik SMS gönderimi', 'Özelleştirilebilir mesajlar', 'Zamanlama ayarları']
    },
    {
      icon: <Clock className="h-12 w-12 text-primary" />,
      title: 'Kolay Takvim Yönetimi',
      description: 'Haftalık ve aylık görünümler ile tüm rezervasyonları tek bakışta görün. Sürükle-bırak ile rezervasyonları kolayca düzenleyin.',
      benefits: ['Görsel takvim arayüzü', 'Sürükle-bırak özelliği', 'Çoklu görünüm seçenekleri']
    },
    {
      icon: <Smartphone className="h-12 w-12 text-primary" />,
      title: 'Mobil Uyumlu Kullanım',
      description: 'Responsive tasarım sayesinde masaüstü, tablet ve mobil cihazlardan sorunsuz erişim. Her yerden yönetim imkanı.',
      benefits: ['Tam mobil uyumluluk', 'Tablet desteği', 'Tarayıcı bağımsız çalışma']
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-primary" />,
      title: 'Çoklu Kurs Yönetimi',
      description: 'Birden fazla sürücü kursunu tek platformdan yönetin. Şube bazlı raporlama ve takip.',
      benefits: ['Çoklu şube desteği', 'Merkezi yönetim', 'Şube bazlı raporlar']
    },
    {
      icon: <FileText className="h-12 w-12 text-primary" />,
      title: 'Detaylı Raporlama',
      description: 'Tamamlanan dersler, eğitmen performansı ve kursiyer aktivitelerini detaylı raporlarla takip edin.',
      benefits: ['Excel çıktısı', 'Performans grafikleri', 'Özelleştirilebilir raporlar']
    },
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: 'Güvenli Veri Saklama',
      description: 'Tüm verileriniz güvenli sunucularda şifrelenerek saklanır. Düzenli yedekleme ile veri kaybı riski sıfıra iner.',
      benefits: ['SSL şifreleme', 'Otomatik yedekleme', 'KVKK uyumlu']
    },
    {
      icon: <Settings className="h-12 w-12 text-primary" />,
      title: 'Özelleştirilebilir Ayarlar',
      description: 'Kurs saatlerini, ders sürelerini ve çalışma günlerini kendi ihtiyaçlarınıza göre ayarlayın.',
      benefits: ['Esnek zaman ayarları', 'Tatil günü tanımlama', 'Ders süresi ayarı']
    },
    {
      icon: <Phone className="h-12 w-12 text-primary" />,
      title: '7/24 Destek',
      description: 'Teknik destek ekibimiz her zaman yanınızda. Sorunlarınız hızlıca çözülür.',
      benefits: ['Anlık destek', 'Uzaktan yardım', 'Eğitim desteği']
    }
  ]

  return (
    <div className="page-shell">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="section-title">Güçlü Özellikler</h1>
          <p className="section-subtitle">
            Sürücü kursu operasyonunuzu kolaylaştıran kapsamlı özellikler
          </p>
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
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Daha Fazlasını Keşfedin</h2>
          <p className="text-xl text-gray-600 mb-8">
            Ücretsiz demo ile tüm özellikleri deneyimleyin
          </p>
          <Link to="/contact" className="btn-primary">
            Demo Talep Et
          </Link>
        </div>
      </div>
    </div>
  )
}
