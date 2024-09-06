export default function Header() {
  return (
    <div className="relative overflow-hidden bg-white" data-aos="fade">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Cari Kostan Nyaman di Sekitar Kamu
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Temukan kost ideal dengan fasilitas terbaik dan lokasi strategis untuk mahasiswa dan pekerja. Jangan lewatkan kesempatan ini!
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Gambar grid dekoratif */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          alt="Kost Cozy"
                          src="https://example.com/img/kost-cozy.jpg"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt="Kost Minimalis"
                          src="https://example.com/img/kost-minimalis.jpg"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt="Kost Strategis"
                          src="https://example.com/img/kost-strategis.jpg"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt="Kost Ekonomis"
                          src="https://example.com/img/kost-ekonomis.jpg"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt="Kost Elite"
                          src="https://example.com/img/kost-elite.jpg"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt="Kost Murah"
                          src="https://example.com/img/kost-murah.jpg"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt="Kost Nyaman"
                          src="https://example.com/img/kost-nyaman.jpg"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#explore-kost"
                className="inline-block rounded-md border border-transparent bg-teal-600 px-8 py-3 text-center font-medium text-white hover:bg-teal-700 transition-colors duration-300"
              >
                Cari Kost Sekarang
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
