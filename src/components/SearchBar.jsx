import React, { useState, useRef } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import { FiMapPin } from 'react-icons/fi'; // Location icon

export default function SearchBar() {
  const [location, setLocation] = useState('');
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [guests, setGuests] = useState(1);
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [category, setCategory] = useState('');
  const datePickerRef = useRef(null);

  // Function to handle clicking outside of the date picker to close it
  const handleClickOutside = (event) => {
    if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
      setShowDatePicker(false);
    }
  };

  // Add event listener to detect clicks outside of the date picker
  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-screen-lg mx-auto mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Find Your Perfect Stay</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Location Dropdown */}
        <div className="col-span-1 relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <div className="relative">
            <FiMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <select
              className="w-full pl-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">Select Location</option>
              <option value="Jakarta">Jakarta</option>
              <option value="Bali">Bali</option>
              <option value="Bandung">Bandung</option>
              <option value="Yogyakarta">Yogyakarta</option>
            </select>
          </div>
        </div>
        
        {/* Date Picker */}
        <div className="col-span-2 relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Check-in / Check-out</label>
          <input
            type="text"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Select dates"
            value={`${format(dateRange[0].startDate, 'MM/dd/yyyy')} - ${format(dateRange[0].endDate, 'MM/dd/yyyy')}`}
            onClick={() => setShowDatePicker(!showDatePicker)}
            readOnly
          />
          {showDatePicker && (
            <div ref={datePickerRef} className="absolute z-10 mt-2 shadow-lg bg-white p-4 rounded-lg">
              <DateRangePicker
                ranges={dateRange}
                onChange={item => setDateRange([item.selection])}
                moveRangeOnFirstSelection={false}
                className="rounded-lg"
              />
            </div>
          )}
        </div>
        
        {/* Guests Input */}
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
          <input
            type="number"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            min={1}
            placeholder="Number of guests"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
        
        {/* Price Range Slider */}
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Price Range (IDR)</label>
          <div className="flex items-center">
            <input
              type="range"
              min="0"
              max="10000000"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([e.target.valueAsNumber, priceRange[1]])}
              className="w-full h-2 bg-teal-500 rounded-lg appearance-none cursor-pointer"
            />
           
          </div>
          <div className="flex justify-between text-gray-700 text-sm mt-2">
            <span>{priceRange[0].toLocaleString()} IDR</span>
            <span>{priceRange[1].toLocaleString()} IDR</span>
          </div>
        </div>
        
        {/* Category Select */}
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <select
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select category</option>
            <option value="Kost">Kost</option>
            <option value="Apartment">Apartment</option>
            <option value="Hotel">Hotel</option>
            {/* Add more categories as needed */}
          </select>
        </div>
        
        {/* Search Button */}
        <div className="col-span-1 flex items-end">
          <button
            className="w-full bg-teal-500 text-white p-3 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
