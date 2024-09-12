import React, { useState } from 'react';

const Filter = ({ onFilterChange }) => {
  const [priceRange, setPriceRange] = useState('');
  const [location, setLocation] = useState('');
  const [facility, setFacility] = useState('');

  const handleFilterChange = () => {
    onFilterChange({ priceRange, location, facility });
  };

  return (
    <div className="filter-container">
      <label>
        Price Range:
        <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
          <option value="">All</option>
          <option value="low">Low (under 1M)</option>
          <option value="medium">Medium (1M - 2M)</option>
          <option value="high">High (above 2M)</option>
        </select>
      </label>

      <label>
        Location:
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location"/>
      </label>

      <label>
        Facility:
        <input type="text" value={facility} onChange={(e) => setFacility(e.target.value)} placeholder="WiFi, AC, etc."/>
      </label>

      <button onClick={handleFilterChange}>Filter</button>
    </div>
  );
};

export default Filter;
