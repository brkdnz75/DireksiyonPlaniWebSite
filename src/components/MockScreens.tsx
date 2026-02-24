export function DashboardScreen() {
  return (
    <div className="w-full h-full bg-gray-50 flex flex-col text-[8px]">
      <div className="bg-primary px-3 py-1.5 flex items-center justify-between">
        <span className="text-white font-bold text-[10px]">DireksiyonPlanı</span>
        <div className="flex gap-2">
          <div className="w-8 h-1.5 bg-white/30 rounded" />
          <div className="w-8 h-1.5 bg-white/30 rounded" />
          <div className="w-8 h-1.5 bg-white/30 rounded" />
        </div>
      </div>
      <div className="flex flex-1 min-h-0">
        <div className="w-14 bg-white border-r border-gray-200 py-2 px-1 space-y-1.5 hidden sm:block">
          {['Anasayfa', 'Takvim', 'Kursiyerler', 'Eğitmenler', 'SMS'].map((item) => (
            <div key={item} className="px-1 py-0.5 rounded text-gray-500 truncate">{item}</div>
          ))}
        </div>
        <div className="flex-1 p-2 space-y-2 overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-gray-700 text-[9px]">Haftalık Takvim</span>
            <div className="w-12 h-3 bg-primary/10 rounded" />
          </div>
          <div className="grid grid-cols-7 gap-0.5">
            {['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'].map((day) => (
              <div key={day} className="text-center text-gray-400 text-[6px] font-medium">{day}</div>
            ))}
            {Array.from({ length: 28 }).map((_, i) => {
              const colors = ['bg-primary/20', 'bg-secondary/30', 'bg-emerald-100', 'bg-transparent', 'bg-transparent']
              return (
                <div key={i} className={`h-2.5 rounded-sm ${colors[i % 5]}`} />
              )
            })}
          </div>
          <div className="grid grid-cols-3 gap-1">
            <div className="bg-white border border-gray-200 rounded p-1 text-center">
              <div className="text-primary font-bold text-[10px]">48</div>
              <div className="text-gray-400 text-[6px]">Kursiyer</div>
            </div>
            <div className="bg-white border border-gray-200 rounded p-1 text-center">
              <div className="text-secondary font-bold text-[10px]">12</div>
              <div className="text-gray-400 text-[6px]">Bugün</div>
            </div>
            <div className="bg-white border border-gray-200 rounded p-1 text-center">
              <div className="text-emerald-600 font-bold text-[10px]">36</div>
              <div className="text-gray-400 text-[6px]">SMS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ReservationScreen() {
  return (
    <div className="w-full h-full bg-gray-50 flex flex-col text-[8px]">
      <div className="bg-primary px-3 py-1.5">
        <span className="text-white font-bold text-[10px]">Rezervasyon Oluştur</span>
      </div>
      <div className="flex-1 p-2 space-y-2 overflow-hidden">
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-1.5">
            <div>
              <div className="text-gray-500 mb-0.5">Kursiyer</div>
              <div className="bg-white border border-gray-200 rounded px-1.5 py-1 text-gray-700">Ahmet Yılmaz</div>
            </div>
            <div>
              <div className="text-gray-500 mb-0.5">Eğitmen</div>
              <div className="bg-white border border-gray-200 rounded px-1.5 py-1 text-gray-700">Mehmet Öz</div>
            </div>
            <div>
              <div className="text-gray-500 mb-0.5">Tarih</div>
              <div className="bg-white border border-gray-200 rounded px-1.5 py-1 text-gray-700">15.03.2025</div>
            </div>
            <div>
              <div className="text-gray-500 mb-0.5">Saat</div>
              <div className="bg-white border border-gray-200 rounded px-1.5 py-1 text-gray-700">10:00</div>
            </div>
            <div className="bg-primary text-white text-center rounded py-1 font-semibold text-[9px] mt-1">Kaydet</div>
          </div>
          <div className="bg-white border border-gray-200 rounded p-1.5">
            <div className="text-center font-semibold text-gray-700 mb-1 text-[7px]">Mart 2025</div>
            <div className="grid grid-cols-7 gap-px">
              {['P', 'S', 'Ç', 'P', 'C', 'C', 'P'].map((d) => (
                <div key={d} className="text-center text-[5px] text-gray-400 font-medium">{d}</div>
              ))}
              {Array.from({ length: 31 }).map((_, i) => (
                <div key={i} className={`text-center text-[6px] py-px rounded ${i === 14 ? 'bg-primary text-white' : 'text-gray-600'}`}>
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function InstructorCalendarScreen() {
  return (
    <div className="w-full h-full bg-gray-50 flex flex-col text-[8px]">
      <div className="bg-primary px-3 py-1.5 flex items-center justify-between">
        <span className="text-white font-bold text-[10px]">Eğitmen Takvimi</span>
        <span className="text-white/70 text-[7px]">Mehmet Öz</span>
      </div>
      <div className="flex-1 p-2 overflow-hidden">
        <div className="grid grid-cols-6 gap-0.5">
          <div className="text-gray-400 text-[6px]">Saat</div>
          {['Pzt', 'Sal', 'Çar', 'Per', 'Cum'].map((d) => (
            <div key={d} className="text-center text-gray-500 font-medium text-[6px]">{d}</div>
          ))}
          {['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'].map((time, row) => (
            <>
              <div key={time} className="text-gray-400 text-[6px] py-1">{time}</div>
              {Array.from({ length: 5 }).map((_, col) => {
                const filled = (row + col) % 3 === 0
                const colors = ['bg-primary/20', 'bg-secondary/20', 'bg-emerald-100']
                return (
                  <div key={`${row}-${col}`} className={`rounded-sm py-1 px-0.5 ${filled ? colors[row % 3] : 'bg-white border border-gray-100'}`}>
                    {filled && <div className="text-[5px] text-gray-600 truncate">Kursiyer</div>}
                  </div>
                )
              })}
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

export function StudentListScreen() {
  const students = [
    { name: 'Ahmet Y.', phone: '0532***', instructor: 'Mehmet Ö.', remaining: 8 },
    { name: 'Ayşe K.', phone: '0545***', instructor: 'Ali D.', remaining: 5 },
    { name: 'Fatma S.', phone: '0555***', instructor: 'Mehmet Ö.', remaining: 12 },
    { name: 'Emre T.', phone: '0541***', instructor: 'Ali D.', remaining: 3 },
    { name: 'Zeynep A.', phone: '0537***', instructor: 'Mehmet Ö.', remaining: 10 },
  ]

  return (
    <div className="w-full h-full bg-gray-50 flex flex-col text-[8px]">
      <div className="bg-primary px-3 py-1.5">
        <span className="text-white font-bold text-[10px]">Kursiyer Listesi</span>
      </div>
      <div className="flex-1 p-2 space-y-1.5 overflow-hidden">
        <div className="bg-white border border-gray-200 rounded px-2 py-1 text-gray-400 text-[7px]">Kursiyer ara...</div>
        <div className="bg-white border border-gray-200 rounded overflow-hidden">
          <div className="grid grid-cols-4 gap-px bg-gray-100 px-1.5 py-1 text-[6px] font-semibold text-gray-500">
            <span>Ad</span><span>Telefon</span><span>Eğitmen</span><span>Kalan</span>
          </div>
          {students.map((s) => (
            <div key={s.name} className="grid grid-cols-4 gap-px px-1.5 py-1 border-t border-gray-100 text-[7px] text-gray-600">
              <span className="truncate">{s.name}</span>
              <span>{s.phone}</span>
              <span className="truncate">{s.instructor}</span>
              <span className="text-primary font-semibold">{s.remaining}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function InstructorMobileScreen() {
  const lessons = [
    { time: '09:00', student: 'Ahmet Yılmaz', status: 'completed', came: true },
    { time: '10:00', student: 'Ayşe Kaya', status: 'completed', came: false },
    { time: '11:00', student: 'Emre Tunç', status: 'active', came: null },
    { time: '13:00', student: 'Fatma Sarı', status: 'upcoming', came: null },
    { time: '14:00', student: 'Zeynep Al.', status: 'upcoming', came: null },
  ]

  return (
    <div className="w-full h-full bg-gray-50 flex flex-col text-[7px]">
      <div className="bg-primary px-2 py-1.5 flex items-center justify-between">
        <span className="text-white font-bold text-[9px]">Eğitmen Paneli</span>
        <span className="text-white/70 text-[7px]">Mehmet Öz</span>
      </div>
      <div className="flex-1 p-2 space-y-1.5 overflow-hidden">
        <div className="flex gap-1">
          <div className="bg-primary text-white rounded px-1.5 py-0.5 font-semibold text-[7px]">Günlük</div>
          <div className="bg-gray-200 text-gray-600 rounded px-1.5 py-0.5 text-[7px]">Haftalık</div>
        </div>
        <div className="text-[8px] font-semibold text-gray-700">15 Mart 2025 - Cumartesi</div>
        <div className="space-y-1">
          {lessons.map((l) => (
            <div key={l.time} className={`bg-white border rounded p-1.5 flex items-center justify-between ${l.status === 'active' ? 'border-primary shadow-sm' : 'border-gray-200'}`}>
              <div className="flex items-center gap-1.5">
                <span className="text-gray-400 font-mono">{l.time}</span>
                <span className="text-gray-700 font-medium">{l.student}</span>
              </div>
              {l.status === 'completed' && (
                <div className={`rounded px-1 py-px text-[6px] font-semibold ${l.came ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-600'}`}>
                  {l.came ? 'Geldi' : 'Gelmedi'}
                </div>
              )}
              {l.status === 'active' && (
                <div className="flex gap-0.5">
                  <div className="bg-emerald-500 text-white rounded px-1 py-px text-[6px]">Geldi</div>
                  <div className="bg-red-500 text-white rounded px-1 py-px text-[6px]">Gelmedi</div>
                </div>
              )}
              {l.status === 'upcoming' && (
                <div className="bg-gray-100 text-gray-400 rounded px-1 py-px text-[6px]">Bekliyor</div>
              )}
            </div>
          ))}
        </div>
        <div className="bg-white border border-gray-200 rounded p-1.5">
          <div className="text-[7px] font-semibold text-gray-600 mb-0.5">Ders Notu Ekle</div>
          <div className="bg-gray-50 border border-gray-100 rounded p-1 text-[6px] text-gray-400">Not yazın...</div>
        </div>
      </div>
    </div>
  )
}

export function StudentPortalScreen() {
  return (
    <div className="w-full h-full bg-gray-50 flex flex-col text-[7px]">
      <div className="bg-primary px-2 py-1.5">
        <span className="text-white font-bold text-[9px]">Öğrenci Paneli</span>
      </div>
      <div className="flex-1 p-2 space-y-1.5 overflow-hidden">
        <div className="bg-white border border-gray-200 rounded p-1.5">
          <div className="text-[8px] font-semibold text-gray-700 mb-1">Ders Programım</div>
          <div className="space-y-0.5">
            {[
              { date: '15 Mar', time: '10:00', status: 'tamamlandı' },
              { date: '17 Mar', time: '14:00', status: 'tamamlandı' },
              { date: '19 Mar', time: '09:00', status: 'yaklaşan' },
              { date: '21 Mar', time: '11:00', status: 'planlandı' },
            ].map((d) => (
              <div key={d.date + d.time} className="flex items-center justify-between py-0.5 border-b border-gray-50 last:border-0">
                <div className="flex gap-1.5">
                  <span className="text-gray-400">{d.date}</span>
                  <span className="text-gray-700 font-medium">{d.time}</span>
                </div>
                <span className={`text-[6px] px-1 py-px rounded font-semibold ${d.status === 'tamamlandı' ? 'bg-emerald-100 text-emerald-700' : d.status === 'yaklaşan' ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-500'}`}>
                  {d.status}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded p-1.5">
          <div className="text-[8px] font-semibold text-gray-700 mb-1">Eğitmen & Araç</div>
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center text-[6px] text-primary font-bold">MÖ</div>
            <div>
              <div className="text-gray-700 font-medium">Mehmet Öz</div>
              <div className="text-gray-400 text-[6px]">34 ABC 123 - Toyota Yaris</div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded p-1.5">
          <div className="text-[8px] font-semibold text-gray-700 mb-1">Memnuniyet Anketi</div>
          <div className="text-[6px] text-gray-500 mb-1">Son dersinizi değerlendirin</div>
          <div className="flex gap-0.5 mb-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <div key={s} className={`w-3 h-3 rounded-full ${s <= 4 ? 'bg-yellow-400' : 'bg-gray-200'}`} />
            ))}
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded p-1 text-[6px] text-gray-400">Yorumunuz...</div>
        </div>
        <div className="grid grid-cols-2 gap-1">
          <div className="bg-white border border-gray-200 rounded p-1 text-center">
            <div className="text-primary font-bold text-[10px]">4/12</div>
            <div className="text-gray-400 text-[6px]">Tamamlanan</div>
          </div>
          <div className="bg-white border border-gray-200 rounded p-1 text-center">
            <div className="text-secondary font-bold text-[10px]">8</div>
            <div className="text-gray-400 text-[6px]">Kalan Ders</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function SmsSettingsScreen() {
  return (
    <div className="w-full h-full bg-gray-50 flex flex-col text-[7px]">
      <div className="bg-primary px-2 py-1.5">
        <span className="text-white font-bold text-[9px]">SMS Ayarları</span>
      </div>
      <div className="flex-1 p-2 space-y-1.5 overflow-hidden">
        <div className="bg-white border border-gray-200 rounded p-1.5 space-y-1">
          <div className="font-semibold text-gray-700 text-[8px]">Hatırlatma Zamanı</div>
          <div className="flex gap-1">
            <div className="bg-primary/10 text-primary rounded px-1.5 py-0.5 font-semibold">1 saat</div>
            <div className="bg-gray-100 text-gray-500 rounded px-1.5 py-0.5">2 saat</div>
            <div className="bg-gray-100 text-gray-500 rounded px-1.5 py-0.5">1 gün</div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded p-1.5 space-y-1">
          <div className="font-semibold text-gray-700 text-[8px]">Mesaj Şablonu</div>
          <div className="bg-gray-50 border border-gray-100 rounded p-1 text-gray-500 text-[6px] leading-relaxed">
            Sayın &#123;kursiyer&#125;, &#123;tarih&#125; tarihinde saat &#123;saat&#125;'de direksiyon dersiniz var.
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded p-1.5 space-y-1">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-gray-700 text-[8px]">Otomatik Gönderim</span>
            <div className="w-6 h-3 bg-primary rounded-full relative">
              <div className="absolute right-0.5 top-0.5 w-2 h-2 bg-white rounded-full" />
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded p-1.5">
          <div className="font-semibold text-gray-700 text-[8px] mb-1">Önizleme</div>
          <div className="bg-green-50 border border-green-200 rounded p-1 text-[6px] text-gray-600">
            Sayın Ahmet Yılmaz, 15.03.2025 tarihinde saat 10:00'da direksiyon dersiniz var.
          </div>
        </div>
      </div>
    </div>
  )
}
