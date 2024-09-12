import { FaWifi, FaSnowflake, FaUtensils, FaParking } from 'react-icons/fa';

const Facilities = () => {
  return (
    <div className="bg-gray-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-4">Fasilitas yang Kami Tawarkan</h2>
        <p className="text-center text-gray-600 mb-8">Fasilitas dapat bervariasi tergantung dari kostan, berikut adalah fasilitas umum yang tersedia:</p>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <FaWifi className="h-12 w-12 text-teal-600 mb-4" />
            <p className="text-gray-700 font-medium">Wi-Fi</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <FaSnowflake className="h-12 w-12 text-teal-600 mb-4" />
            <p className="text-gray-700 font-medium">AC di Kamar</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <FaUtensils className="h-12 w-12 text-teal-600 mb-4" />
            <p className="text-gray-700 font-medium">Dapur Bersama</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <FaParking className="h-12 w-12 text-teal-600 mb-4" />
            <p className="text-gray-700 font-medium">Parkir Motor/Mobil</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
