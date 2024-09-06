import { FaUsers, FaHandshake, FaShieldAlt, FaMapMarkerAlt, FaHome, FaCheckCircle } from 'react-icons/fa';

const features = [
  { name: 'Keamanan', description: 'Setiap kost yang terdaftar telah melalui proses verifikasi.', icon: FaShieldAlt },
  { name: 'Kenyamanan', description: 'Kami pastikan hanya menampilkan kost dengan fasilitas lengkap dan bersih.', icon: FaHome },
  { name: 'Kemudahan', description: 'Pencarian yang mudah dengan filter berdasarkan lokasi, harga, dan fasilitas.', icon: FaMapMarkerAlt },
  { name: 'Pencarian Lokasi', description: 'Temukan kost di dekat kampus atau tempat kerja kamu.', icon: FaMapMarkerAlt },
  { name: 'Ulasan Penghuni', description: 'Baca pengalaman penghuni kost sebelumnya sebelum kamu memutuskan.', icon: FaUsers },
  { name: 'Booking Online', description: 'Reservasi langsung dari website tanpa perlu datang ke tempat.', icon: FaCheckCircle },
];

export default function HeaderAbout() {
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Tentang Kami</h2>
          <p className="mt-4 text-gray-500">
            Kami hadir untuk memudahkan para pencari kost menemukan tempat tinggal yang nyaman dan sesuai kebutuhan. Dengan fitur pencarian yang lengkap dan akurat, kami berkomitmen untuk menjadi solusi terbaik bagi mahasiswa dan pekerja.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="flex items-center font-medium text-gray-900">
                  <feature.icon className="mr-2 text-indigo-600" /> {feature.name}
                </dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            alt="Tampilan kostan yang nyaman dan aman."
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
            className="rounded-lg bg-gray-100 transition transform hover:scale-105 hover:shadow-lg"
          />
          <img
            alt="Fasilitas lengkap di kostan."
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
            className="rounded-lg bg-gray-100 transition transform hover:scale-105 hover:shadow-lg"
          />
          <img
            alt="Kost dengan akses mudah ke kampus dan tempat kerja."
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
            className="rounded-lg bg-gray-100 transition transform hover:scale-105 hover:shadow-lg"
          />
          <img
            alt="Booking kost online tanpa survei langsung."
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
            className="rounded-lg bg-gray-100 transition transform hover:scale-105 hover:shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
