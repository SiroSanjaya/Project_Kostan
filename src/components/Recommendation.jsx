const callouts = [
  {
    name: 'Kost Cozy Living',
    description: 'Kost nyaman untuk mahasiswa dan pekerja',
    imageSrc: 'https://www.rukita.co/stories/wp-content/uploads/2023/05/Common-Coliving-Addams-1.webp',
    imageAlt: 'Gambar tampilan depan Kost Cozy Living',
    href: '/kost-details/cozy-living',
  },
  {
    name: 'Kost Minimalis',
    description: 'Fasilitas lengkap, desain minimalis modern',
    imageSrc: 'https://www.rukita.co/stories/wp-content/uploads/2021/08/rekomendasi-kost-rukita-yang-punya-sarana-olahraga-thamrin.jpg',
    imageAlt: 'Kamar tidur Kost Minimalis dengan perabotan modern',
    href: '/kost-details/minimalis',
  },
  {
    name: 'Kost Strategis',
    description: 'Dekat kampus dan pusat perbelanjaan',
    imageSrc: 'https://www.rukita.co/stories/wp-content/uploads/2022/12/Rukita-Rukosta-Jelambar-Grogol.jpg',
    imageAlt: 'Kost Strategis dekat dengan kampus dan mall',
    href: '/kost-details/strategis',
  },
]

export default function Recommendation() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Rekomendasi Kost-Kostan</h2>
          <p className="mt-4 text-lg text-gray-600">Temukan kost yang cocok untuk kebutuhan Anda.</p>
        </div>

        <div className="mt-12 grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {callouts.map((callout) => (
            <div key={callout.name} className="group relative shadow-lg rounded-lg overflow-hidden bg-white">
              <div className="relative h-72 w-full overflow-hidden group-hover:opacity-90 transition-opacity duration-300">
                <img
                  src={callout.imageSrc}
                  alt={callout.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-500">{callout.description}</p>
                <a 
                  href={callout.href} 
                  className="mt-4 inline-block text-teal-600 hover:text-teal-800 font-semibold text-sm"
                >
                  Lihat Detail
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
