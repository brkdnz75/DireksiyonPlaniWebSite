import { useState } from 'react'
import { Play, Youtube } from 'lucide-react'
import { useAppPreferences } from '../context/AppPreferences'

type VideoItem = {
  id: string
  title: string
  description: string
  thumbnail: string
  duration: string
}

export default function Videos() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const { language } = useAppPreferences()

  const trVideos: VideoItem[] = [
    {
      id: 'dQw4w9WgXcQ',
      title: 'Sisteme Giriş ve İlk Ayarlar',
      description: 'DireksiyonPlanı sistemine nasıl giriş yapacağınızı ve ilk ayarları nasıl yapacağınızı öğrenin.',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      duration: '5:30',
    },
    {
      id: 'jNQXAC9IVRw',
      title: 'Kursiyer Ekleme ve Yönetimi',
      description: 'Yeni kursiyerleri sisteme nasıl ekleyeceğinizi ve mevcut kursiyer bilgilerini nasıl düzenleyeceğinizi öğrenin.',
      thumbnail: 'https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg',
      duration: '8:15',
    },
    {
      id: 'M7lc1UVf-VE',
      title: 'Rezervasyon Oluşturma',
      description: 'Takvim üzerinden rezervasyon oluşturma, düzenleme ve iptal etme işlemlerini öğrenin.',
      thumbnail: 'https://img.youtube.com/vi/M7lc1UVf-VE/maxresdefault.jpg',
      duration: '6:45',
    },
    {
      id: '9bZkp7q19f0',
      title: 'Eğitmen Program Yönetimi',
      description: 'Eğitmen programlarını görüntüleme ve yönetme işlemlerini detaylı şekilde öğrenin.',
      thumbnail: 'https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg',
      duration: '7:20',
    },
    {
      id: 'kJQP7kiw5Fk',
      title: 'SMS Hatırlatma Ayarları',
      description: 'Otomatik SMS hatırlatma sistemini yapılandırma ve mesaj şablonlarını özelleştirme.',
      thumbnail: 'https://img.youtube.com/vi/kJQP7kiw5Fk/maxresdefault.jpg',
      duration: '4:50',
    },
    {
      id: 'ZZ5LpwO-An4',
      title: 'Raporlama ve Analiz',
      description: 'Sistem raporlarını oluşturma, filtreleme ve Excel çıktısı alma işlemlerini öğrenin.',
      thumbnail: 'https://img.youtube.com/vi/ZZ5LpwO-An4/maxresdefault.jpg',
      duration: '9:10',
    },
  ]

  const enVideos: VideoItem[] = [
    {
      id: 'dQw4w9WgXcQ',
      title: 'System Login and Initial Setup',
      description: 'Learn how to log in to DireksiyonPlanı and configure initial settings quickly.',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      duration: '5:30',
    },
    {
      id: 'jNQXAC9IVRw',
      title: 'Adding and Managing Students',
      description: 'Learn how to add new students and edit existing student profiles.',
      thumbnail: 'https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg',
      duration: '8:15',
    },
    {
      id: 'M7lc1UVf-VE',
      title: 'Creating Reservations',
      description: 'Learn how to create, edit and cancel reservations through the calendar.',
      thumbnail: 'https://img.youtube.com/vi/M7lc1UVf-VE/maxresdefault.jpg',
      duration: '6:45',
    },
    {
      id: '9bZkp7q19f0',
      title: 'Instructor Schedule Management',
      description: 'Learn how to review and manage instructor schedules in detail.',
      thumbnail: 'https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg',
      duration: '7:20',
    },
    {
      id: 'kJQP7kiw5Fk',
      title: 'SMS Reminder Settings',
      description: 'Configure automatic SMS reminders and customize message templates.',
      thumbnail: 'https://img.youtube.com/vi/kJQP7kiw5Fk/maxresdefault.jpg',
      duration: '4:50',
    },
    {
      id: 'ZZ5LpwO-An4',
      title: 'Reporting and Analytics',
      description: 'Learn how to generate reports, apply filters and export to Excel.',
      thumbnail: 'https://img.youtube.com/vi/ZZ5LpwO-An4/maxresdefault.jpg',
      duration: '9:10',
    },
  ]

  const videos = language === 'en' ? enVideos : trVideos

  const copy =
    language === 'en'
      ? {
          title: 'Video Guides',
          subtitle: 'Step-by-step tutorials to help you use the system efficiently',
          channelTitle: 'Our YouTube Channel',
          channelDescription: 'Subscribe for more tutorials and product updates',
          channelCta: 'Visit Channel',
          iframeTitle: 'YouTube video player',
        }
      : {
          title: 'Video Eğitimler',
          subtitle: 'Sistemi etkili kullanmanız için hazırlanmış adım adım video eğitimler',
          channelTitle: 'YouTube Kanalımız',
          channelDescription: 'Daha fazla eğitim videosu ve güncellemeler için kanalımıza abone olun',
          channelCta: 'Kanalı Ziyaret Et',
          iframeTitle: 'YouTube video player',
        }

  return (
    <div className="page-shell">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="section-title">{copy.title}</h1>
          <p className="section-subtitle">{copy.subtitle}</p>
        </div>

        {selectedVideo && (
          <div className="mb-12">
            <div className="bg-black rounded-2xl overflow-hidden shadow-2xl aspect-video">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideo}`}
                title={copy.iframeTitle}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="panel-card rounded-xl overflow-hidden transition-all duration-300 cursor-pointer group hover:shadow-[0_24px_44px_rgba(20,44,94,0.14)]"
              onClick={() => setSelectedVideo(video.id)}
            >
              <div className="relative overflow-hidden aspect-video bg-gray-200">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:opacity-75 transition-opacity">
                  <div className="flex items-center justify-center h-full">
                    <div className="bg-white/90 rounded-full p-6 group-hover:scale-110 transition-transform">
                      <Play className="h-12 w-12 text-primary" fill="currentColor" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm font-medium">
                  {video.duration}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{video.title}</h3>
                <p className="text-gray-600 text-sm">{video.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-gradient-to-r from-[#0f3f9f] via-primary to-secondary p-12 text-white shadow-[0_20px_40px_rgba(20,44,94,0.3)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <Youtube className="h-16 w-16" />
              <div>
                <h2 className="text-3xl font-bold mb-2">{copy.channelTitle}</h2>
                <p className="text-lg opacity-90">{copy.channelDescription}</p>
              </div>
            </div>
            <a
              href="https://www.youtube.com/channel/UCSkwxojgSZR8Zr9-eWGvodw"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 whitespace-nowrap"
            >
              {copy.channelCta}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}