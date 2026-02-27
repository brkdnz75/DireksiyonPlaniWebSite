import { Instagram, Youtube, Facebook, ExternalLink } from 'lucide-react'
import { useAppPreferences } from '../context/AppPreferences'

type InstagramPost = {
  image: string
  caption: string
  link: string
}

export default function Social() {
  const { language } = useAppPreferences()

  const postsTr = [
    'Yeni özelliklerimizi keşfedin!',
    'Müşteri başarı hikayeleri',
    'Kullanım ipuçları',
    'Yeni güncelleme duyurusu',
    'Eğitim içerikleri',
    'Sistem güncellemeleri',
  ]

  const postsEn = [
    'Discover our newest features!',
    'Customer success stories',
    'Usage tips and tricks',
    'New update announcement',
    'Training content',
    'System updates',
  ]

  const captions = language === 'en' ? postsEn : postsTr

  const instagramPosts: InstagramPost[] = captions.map((caption, index) => ({
    image: `https://via.placeholder.com/400x400/${index % 2 === 0 ? '0891b2' : '06b6d4'}/ffffff?text=Post+${index + 1}`,
    caption,
    link: 'https://www.instagram.com/direksiyonplani/',
  }))

  const copy =
    language === 'en'
      ? {
          title: 'Social Media',
          subtitle: 'Follow us for updates, announcements and practical usage tips',
          instagramText:
            'We share daily tips, feature highlights and customer stories on Instagram. Join our community!',
          instagramCta: 'Follow',
          youtubeText:
            'Subscribe to our YouTube channel for in-depth tutorials, product walk-throughs and live sessions.',
          youtubeCta: 'Subscribe',
          facebookText: 'Follow our Facebook page for announcements, updates and community content.',
          facebookCta: 'Visit Page',
          recentPosts: 'Latest Instagram Posts',
          communityTitle: 'Join Our Community',
          communityDesc:
            'Follow our social accounts to stay updated, share experiences with other users and access exclusive content.',
          igFollow: 'Follow on Instagram',
          ytFollow: 'Subscribe on YouTube',
          fbFollow: 'Follow on Facebook',
        }
      : {
          title: 'Sosyal Medya',
          subtitle: 'Güncel içerikler, duyurular ve kullanım ipuçları için bizi takip edin',
          instagramText:
            "Günlük ipuçları, özellik tanıtımları ve müşteri hikayelerini Instagram'da paylaşıyoruz. Topluluğumuza katılın!",
          instagramCta: 'Takip Et',
          youtubeText:
            'Detaylı eğitim videoları, sistem tanıtımları ve canlı yayınlar için YouTube kanalımıza abone olun.',
          youtubeCta: 'Abone Ol',
          facebookText: 'Duyurular, güncellemeler ve topluluk paylaşımları için Facebook sayfamızı takip edin.',
          facebookCta: 'Sayfayı Ziyaret Et',
          recentPosts: 'Son Instagram Gönderileri',
          communityTitle: 'Topluluğumuza Katılın',
          communityDesc:
            'Son güncellemelerden haberdar olmak, diğer kullanıcılarla deneyim paylaşmak ve özel içeriklere erişmek için sosyal medya hesaplarımızı takip edin.',
          igFollow: "Instagram'da Takip Et",
          ytFollow: "YouTube'da Abone Ol",
          fbFollow: "Facebook'ta Takip Et",
        }

  return (
    <div className="page-shell">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="section-title">{copy.title}</h1>
          <p className="section-subtitle">{copy.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="rounded-2xl bg-gradient-to-br from-[#0f3f9f] to-primary p-12 text-white shadow-[0_20px_40px_rgba(20,44,94,0.28)]">
            <div className="flex items-center space-x-4 mb-6">
              <Instagram className="h-16 w-16" />
              <div>
                <h2 className="text-3xl font-bold">Instagram</h2>
                <p className="text-lg opacity-90">@direksiyonplani</p>
              </div>
            </div>
            <p className="text-lg mb-8 opacity-90">{copy.instagramText}</p>
            <a
              href="https://www.instagram.com/direksiyonplani/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 rounded-lg bg-white px-8 py-3 font-bold text-[#0f3f9f] transition-all duration-300 hover:bg-gray-100"
            >
              <span>{copy.instagramCta}</span>
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-primary to-secondary p-12 text-white shadow-[0_20px_40px_rgba(20,44,94,0.24)]">
            <div className="flex items-center space-x-4 mb-6">
              <Youtube className="h-16 w-16" />
              <div>
                <h2 className="text-3xl font-bold">YouTube</h2>
                <p className="text-lg opacity-90">DireksiyonPlanı</p>
              </div>
            </div>
            <p className="text-lg mb-8 opacity-90">{copy.youtubeText}</p>
            <a
              href="https://www.youtube.com/channel/UCSkwxojgSZR8Zr9-eWGvodw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 rounded-lg bg-white px-8 py-3 font-bold text-primary transition-all duration-300 hover:bg-gray-100"
            >
              <span>{copy.youtubeCta}</span>
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-[#153a83] to-[#2b5fb8] p-12 text-white shadow-[0_20px_40px_rgba(20,44,94,0.24)]">
            <div className="flex items-center space-x-4 mb-6">
              <Facebook className="h-16 w-16" />
              <div>
                <h2 className="text-3xl font-bold">Facebook</h2>
                <p className="text-lg opacity-90">DireksiyonPlanı</p>
              </div>
            </div>
            <p className="text-lg mb-8 opacity-90">{copy.facebookText}</p>
            <a
              href="https://www.facebook.com/profile.php?id=61588536311091"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 rounded-lg bg-white px-8 py-3 font-bold text-[#153a83] transition-all duration-300 hover:bg-gray-100"
            >
              <span>{copy.facebookCta}</span>
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{copy.recentPosts}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {instagramPosts.map((post, index) => (
              <a
                key={index}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden rounded-lg"
              >
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram className="h-8 w-8 text-white" />
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="panel-card p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{copy.communityTitle}</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">{copy.communityDesc}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.instagram.com/direksiyonplani/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-gradient-to-r from-[#0f3f9f] to-primary px-8 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg"
            >
              {copy.igFollow}
            </a>
            <a
              href="https://www.youtube.com/channel/UCSkwxojgSZR8Zr9-eWGvodw"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-gradient-to-r from-primary to-secondary px-8 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg"
            >
              {copy.ytFollow}
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61588536311091"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-gradient-to-r from-[#153a83] to-[#2b5fb8] px-8 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg"
            >
              {copy.fbFollow}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}