import React from 'react';
import MoreCountryDetails from '../MoreCountryDetails/MoreCountryDetails';

const CountryDetails = (props) => {
  
  console.log(props.country.name.common);
  return (
    <div>
      this is country details
      <MoreCountryDetails {...props}/>
    </div>
  );
};

export default CountryDetails;
