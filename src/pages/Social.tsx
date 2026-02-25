import { Instagram, Youtube, Facebook, ExternalLink } from 'lucide-react'

export default function Social() {
  const instagramPosts = [
    {
      image: 'https://via.placeholder.com/400x400/0891b2/ffffff?text=Post+1',
      caption: 'Yeni özelliklerimizi keşfedin!',
      link: 'https://www.instagram.com/direksiyonplani/'
    },
    {
      image: 'https://via.placeholder.com/400x400/06b6d4/ffffff?text=Post+2',
      caption: 'Müşteri başarı hikayeleri',
      link: 'https://www.instagram.com/direksiyonplani/'
    },
    {
      image: 'https://via.placeholder.com/400x400/0891b2/ffffff?text=Post+3',
      caption: 'Kullanım ipuçları',
      link: 'https://www.instagram.com/direksiyonplani/'
    },
    {
      image: 'https://via.placeholder.com/400x400/06b6d4/ffffff?text=Post+4',
      caption: 'Yeni güncelleme duyurusu',
      link: 'https://www.instagram.com/direksiyonplani/'
    },
    {
      image: 'https://via.placeholder.com/400x400/0891b2/ffffff?text=Post+5',
      caption: 'Eğitim içerikleri',
      link: 'https://www.instagram.com/direksiyonplani/'
    },
    {
      image: 'https://via.placeholder.com/400x400/06b6d4/ffffff?text=Post+6',
      caption: 'Sistem güncellemeleri',
      link: 'https://www.instagram.com/direksiyonplani/'
    }
  ]

  return (
    <div className="page-shell">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="section-title">Sosyal Medya</h1>
          <p className="section-subtitle">
            Güncel içerikler, duyurular ve kullanım ipuçları için bizi takip edin
          </p>
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
            <p className="text-lg mb-8 opacity-90">
              Günlük ipuçları, özellik tanıtımları ve müşteri hikayelerini Instagram'da paylaşıyoruz.
              Topluluğumuza katılın!
            </p>
            <a
              href="https://www.instagram.com/direksiyonplani/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 rounded-lg bg-white px-8 py-3 font-bold text-[#0f3f9f] transition-all duration-300 hover:bg-gray-100"
            >
              <span>Takip Et</span>
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
            <p className="text-lg mb-8 opacity-90">
              Detaylı eğitim videoları, sistem tanıtımları ve canlı yayınlar için YouTube kanalımıza abone olun.
            </p>
            <a
              href="https://www.youtube.com/channel/UCSkwxojgSZR8Zr9-eWGvodw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 rounded-lg bg-white px-8 py-3 font-bold text-primary transition-all duration-300 hover:bg-gray-100"
            >
              <span>Abone Ol</span>
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
            <p className="text-lg mb-8 opacity-90">
              Duyurular, güncellemeler ve topluluk paylaşımları için Facebook sayfamızı takip edin.
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=61588536311091"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 rounded-lg bg-white px-8 py-3 font-bold text-[#153a83] transition-all duration-300 hover:bg-gray-100"
            >
              <span>Sayfayı Ziyaret Et</span>
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Son Instagram Gönderileri</h2>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Topluluğumuza Katılın
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Son güncellemelerden haberdar olmak, diğer kullanıcılarla deneyim paylaşmak ve
            özel içeriklere erişmek için sosyal medya hesaplarımızı takip edin.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.instagram.com/direksiyonplani/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-gradient-to-r from-[#0f3f9f] to-primary px-8 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg"
            >
              Instagram'da Takip Et
            </a>
            <a
              href="https://www.youtube.com/channel/UCSkwxojgSZR8Zr9-eWGvodw"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-gradient-to-r from-primary to-secondary px-8 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg"
            >
              YouTube'da Abone Ol
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61588536311091"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-gradient-to-r from-[#153a83] to-[#2b5fb8] px-8 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg"
            >
              Facebook'ta Takip Et
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
