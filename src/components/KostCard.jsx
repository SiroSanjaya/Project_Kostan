import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { StarIcon, MapPinIcon, CheckCircleIcon } from '@heroicons/react/20/solid';

const KostCard = ({ title, price, location, imageUrl, reviews = {}, facilities = [] }) => {
  const [open, setOpen] = useState(false);

  const rating = reviews.rating || 0;
  const reviewCount = reviews.count || 0;
  const reviewText = reviews.text || "";

  return (
    <>
      <section className="p-4 max-w-lg mx-auto bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out">
        <div className="relative w-full h-60 bg-gray-200 rounded-lg overflow-hidden lg:h-80">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-center object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300 ease-in-out flex items-center justify-center">
            <button
              className="px-4 py-2 bg-white text-gray-900 rounded-md hover:bg-gray-900 hover:text-white transition-colors duration-300 ease-in-out"
              onClick={() => setOpen(true)}
            >
              View Details
            </button>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <p className="mt-2 text-md text-gray-700 flex items-center">
            <MapPinIcon className="h-5 w-5 text-gray-500 mr-2" aria-hidden="true" />
            {location}
          </p>
          <p className="mt-1 text-lg font-bold text-gray-900">{price}</p>
        </div>
      </section>

      <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" />
        
        <div className="fixed inset-0 flex items-center justify-center z-10 p-4 overflow-y-auto">
          <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-3xl mx-auto p-6">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Close</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative w-full h-80 bg-gray-200 rounded-lg overflow-hidden">
                <img
                  alt={title}
                  src={imageUrl}
                  className="object-cover object-center w-full h-full"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
                <p className="text-lg text-gray-700 mt-2 flex items-center">
                  <MapPinIcon className="h-5 w-5 text-gray-500 mr-2" aria-hidden="true" />
                  Location: {location}
                </p>
                <p className="text-2xl font-bold text-gray-900 mt-2">{price}</p>
                
                {/* Reviews */}
                <section aria-labelledby="reviews-heading" className="mt-6">
                  <h3 id="reviews-heading" className="text-xl font-semibold text-gray-900">Reviews</h3>
                  <div className="flex items-center mt-2">
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((ratingValue) => (
                        <StarIcon
                          key={ratingValue}
                          aria-hidden="true"
                          className={`h-5 w-5 flex-shrink-0 ${
                            rating > ratingValue ? 'text-yellow-500' : 'text-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="ml-3 text-sm font-medium text-gray-600">{reviewCount} reviews</p>
                  </div>
                  <p className="mt-2 text-sm text-gray-700">{reviewText}</p>
                </section>

                {/* Facilities */}
                <section aria-labelledby="facilities-heading" className="mt-10">
                  <h3 id="facilities-heading" className="text-xl font-semibold text-gray-900">Facilities</h3>
                  <ul className="mt-2 list-disc list-inside space-y-2 text-sm text-gray-700">
                    {facilities.length > 0 ? (
                      facilities.map((facility, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                          {facility}
                        </li>
                      ))
                    ) : (
                      <li className="text-gray-500">No facilities available</li>
                    )}
                  </ul>
                </section>

                <button
                  type="button"
                  className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to bag
                </button>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default KostCard;
