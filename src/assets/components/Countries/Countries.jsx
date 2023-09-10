import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountries = (country) => {
    let newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  console.log(visitedCountries);

  return (
    <div className='m-5'>
      Total countries {countries.length}
      {/* list os visited countries */}
      <ul>
        {visitedCountries.map((visitedCountry) => (
          <li>{visitedCountry.name.common}</li>
        ))}
      </ul>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-5'>
        {countries.map((country, index) => (
          <Country
            key={index}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
          />
        ))}
      </div>
    </div>
  );
};

export default Countries;
