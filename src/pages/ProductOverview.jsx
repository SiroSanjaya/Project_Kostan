'use client'

import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { FaCheckCircle, FaWifi, FaShower, FaConciergeBell } from 'react-icons/fa'
import { MapPinIcon } from '@heroicons/react/24/outline'
import Recommendation from '../components/Recommendation'

const property = {
  name: 'Kostan Cozy Living',
  price: 'Rp1,500,000/bulan',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Kostan', href: '#' },
    { id: 2, name: 'Cozy Living', href: '#' },
  ],
  images: [
    {
      src: 'https://asset-2.tstatic.net/tribunnews/foto/bank/images/kost-ekslusif.jpg',
      alt: 'Kamar kostan dengan fasilitas lengkap.',
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_iq7UkDDP8Ae02gNkellcnZzF8bZHvjQkl_1EHWHfmxrb9U4M7GWoh4NAnfDslph_iQ4&usqp=CAU',
      alt: 'Ruang bersama di kostan.',
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPZoB2yjNndbUgeLXDAbOuVp6BdXcKy8-4SwheP_Co-JD0iR7wupfnMGYDY1SJ2xO2ZNE&usqp=CAU',
      alt: 'Fasilitas dapur di kostan.',
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtTtBivfooKYpZP3TQ6ictx39eS879XwIUAGL-esgzs5PEncyWqIP6rH19javIMhmmBT8&usqp=CAU',
      alt: 'Bagian luar kostan.',
    },
  ],
  features: [
    { name: 'Kamar dengan AC', icon: <FaCheckCircle className="h-6 w-6 text-teal-500" /> },
    { name: 'WiFi gratis', icon: <FaWifi className="h-6 w-6 text-teal-500" /> },
    { name: 'Kamar mandi dalam', icon: <FaShower className="h-6 w-6 text-teal-500" /> },
    { name: 'Ruang bersama', icon: <FaConciergeBell className="h-6 w-6 text-teal-500" /> },
  ],
  description:
    'Kostan Cozy Living menawarkan kenyamanan dan kemudahan dengan fasilitas lengkap. Dengan kamar ber-AC, WiFi gratis, dan kamar mandi dalam, kami menyediakan tempat tinggal yang ideal untuk Anda yang mencari kenyamanan dan kemudahan. Bergabunglah dengan komunitas kami dan nikmati fasilitas terbaik.',
  address: 'Jl. Contoh Alamat No.123, Kota, Negara', // Ganti dengan alamat sebenarnya
  mapUrl: 'https://www.google.com/maps?q=Jl.+Contoh+Alamat+No.123,+Kota,+Negara', // Ganti dengan URL peta sebenarnya
  videoUrl: 'https://www.youtube.com/embed/VIDEO_ID' // Ganti dengan ID video YouTube sebenarnya
}

const reviews = { href: '#', average: 4, totalCount: 50 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function PropertyOverview() {
  const [selectedFeature, setSelectedFeature] = useState(property.features[0])

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {property.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a href={property.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {property.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              alt={property.images[0].alt}
              src={property.images[0].src}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                alt={property.images[1].alt}
                src={property.images[1].src}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                alt={property.images[2].alt}
                src={property.images[2].src}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              alt={property.images[3].alt}
              src={property.images[3].src}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Property info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{property.name}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Property information</h2>
            <p className="text-3xl tracking-tight text-gray-900">{property.price}</p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      aria-hidden="true"
                      className={classNames(
                        reviews.average > rating ? 'text-teal-500' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0',
                      )}
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <p className="ml-2 text-sm font-medium text-gray-900">{reviews.totalCount} reviews</p>
              </div>
            </div>

            {/* Location */}
            <div className="mt-6">
              <h2 className="text-lg font-medium text-gray-900">Location</h2>
              <div className="flex items-center space-x-2">
                <MapPinIcon className="h-6 w-6 text-teal-500" />
                <a href={property.mapUrl} target="_blank" rel="noopener noreferrer" className="text-base text-gray-500">
                  {property.address}
                </a>
              </div>
            </div>

            {/* Video */}
  
          </div>

          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1">
            <h2 className="text-lg font-medium text-gray-900">About</h2>
            <p className="mt-4 text-base text-gray-500">{property.description}</p>
          </div>

          {/* Features */}
          <div className="mt-6 lg:col-span-2 lg:row-span-1 lg:mt-0">
            <h2 className="text-lg font-medium text-gray-900">Features</h2>
            <ul role="list" className="mt-4 space-y-4">
              {property.features.map((feature) => (
                <li key={feature.name} className="flex gap-x-3">
                  {feature.icon}
                  <p className="text-base text-gray-500">{feature.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
