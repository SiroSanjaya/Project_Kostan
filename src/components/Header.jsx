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
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 transition-transform transform hover:scale-105">
                        <img
                          alt="Kost Cozy"
                          src="https://artikel.rumah123.com/news-content/img/2021/09/02212547/Desain-Kos-Kosan-Pinterest9.jpg"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg transition-transform transform hover:scale-105">
                        <img
                          alt="Kost Minimalis"
                          src="https://events.rumah123.com/wp-content/uploads/sites/38/2021/10/17144716/desain-kos-kosan-industrial-modern.jpg"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg transition-transform transform hover:scale-105">
                        <img
                          alt="Kost Strategis"
                          src="https://idkos.com/images/artikel/16-contoh-desain-koskosan-yang-menarik-untuk-bisnis-atau-referensi-kamar-anda-46.jpeg"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg transition-transform transform hover:scale-105">
                        <img
                          alt="Kost Ekonomis"
                          src="https://blog-images.reddoorz.com/uploads/ckeditor/pictures/5058/content_kamar_kost_aesthetic.jpg"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg transition-transform transform hover:scale-105">
                        <img
                          alt="Kost Elite"
                          src="https://silamparitv.disway.id/upload/c97b5e37c597a425ea5612dc3cd6ec95.jpg"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg transition-transform transform hover:scale-105">
                        <img
                          alt="Kost Murah"
                          src="https://silamparitv.disway.id/upload/c97b5e37c597a425ea5612dc3cd6ec95.jpg"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg transition-transform transform hover:scale-105">
                        <img
                          alt="Kost Nyaman"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRljtZ0cwBLL5O4lu138uOWB6zrUB5otc7doSH9B6dJ5Yts0S8OdgLToHtQb6SraKYAn4M&usqp=CAU"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#explore-kost"
                className="inline-block mt-10 rounded-md border border-transparent bg-teal-600 px-8 py-3 text-center font-medium text-white hover:bg-teal-700 transition-colors duration-300"
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
