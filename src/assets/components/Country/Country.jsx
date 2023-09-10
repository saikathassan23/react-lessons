import React from 'react';

const Country = ({ country, handleVisitedCountries }) => {
  const { name, flags } = country;
  console.log(name.common, flags.png);
  //   function handleClick() {
  //     console.log(country);
  //   }
  return (
    <div className='border p-2 border-orange-500'>
      <h3 className='text-center'>{name.common}</h3>
      <img className='w-[200px] h-[200px] mx-auto' src={flags.png} alt='' />
      <button
        onClick={()=>handleVisitedCountries(country)}
        className='btn m-2 capitalize btn-primary block mx-auto'
      >
        Visit!
      </button>
    </div>
  );
};

export default Country;
