// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Sidebar from './Sidebar';

// const District = () => {
//   const countryStateCityDistrictData = {
//     USA: {
//       Alabama: {
//         Birmingham: ['District 1', 'District 2'],
//         Montgomery: ['District A', 'District B'],
//         Mobile: ['District X', 'District Y'],
//       },
//       Alaska: {
//         Anchorage: ['District 1', 'District 2'],
//         Juneau: ['District A', 'District B'],
//         Fairbanks: ['District X', 'District Y'],
//       },
//     },
//     Canada: {
//       Alberta: {
//         Calgary: ['District 1', 'District 2'],
//         Edmonton: ['District A', 'District B'],
//         Red_Deer: ['District X', 'District Y'],
//       },
//       British_Columbia: {
//         Vancouver: ['District 1', 'District 2'],
//         Victoria: ['District A', 'District B'],
//         Surrey: ['District X', 'District Y'],
//       },
//     },
//     India: {
//       'Andhra Pradesh': {
//         Visakhapatnam: ['District 1', 'District 2'],
//         Vijayawada: ['District A', 'District B'],
//         Guntur: ['District X', 'District Y'],
//       },
//       'Arunachal Pradesh': {
//         Itanagar: ['District 1', 'District 2'],
//         Naharlagun: ['District A', 'District B'],
//         Pasighat: ['District X', 'District Y'],
//       },
//     },
//   };

//   const countries = Object.keys(countryStateCityDistrictData);

//   const [selectedCountry, setSelectedCountry] = useState('');
//   const [selectedState, setSelectedState] = useState('');
//   const [selectedCity, setSelectedCity] = useState('');
//   const [selectedDistrict, setSelectedDistrict] = useState('');

//   const navigate = useNavigate();

//   const handleCountryChange = (e) => {
//     const countryName = e.target.value;
//     setSelectedCountry(countryName);
//     setSelectedState('');
//     setSelectedCity('');
//     setSelectedDistrict('');
//   };

//   const handleStateChange = (e) => {
//     const stateName = e.target.value;
//     setSelectedState(stateName);
//     setSelectedCity('');
//     setSelectedDistrict('');
//   };

//   const handleCityChange = (e) => {
//     const cityName = e.target.value;
//     setSelectedCity(cityName);
//     setSelectedDistrict('');
//   };

//   const handleDistrictChange = (e) => {
//     const districtName = e.target.value;
//     setSelectedDistrict(districtName);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newDistrict = { country: selectedCountry, state: selectedState, city: selectedCity, district: selectedDistrict };
//     let savedDistricts = JSON.parse(localStorage.getItem('districts')) || [];
//     savedDistricts.push(newDistrict);
//     localStorage.setItem('districts', JSON.stringify(savedDistricts));
//     navigate(`/district`);
//   };

//   return (
//     <>
//       <div><Sidebar/></div>
      
//       <div>
//         <h2>District</h2>
//         <p className='para'>This is the district selection page.</p>

//         <form className='form' onSubmit={handleSubmit}>
//           <select value={selectedCountry} onChange={handleCountryChange}>
//             <option value="">Select Country</option>
//             {countries.map((country, index) => (
//               <option key={index} value={country}>
//                 {country}
//               </option>
//             ))}
//           </select>
//           <br /><br />

//           <select value={selectedState} onChange={handleStateChange} disabled={!selectedCountry}>
//             <option value="">Select State</option>
//             {selectedCountry &&
//               Object.keys(countryStateCityDistrictData[selectedCountry]).map((state, index) => (
//                 <option key={index} value={state}>
//                   {state}
//                 </option>
//               ))}
//           </select>
//           <br /><br />

//           {/* <select value={selectedCity} onChange={handleCityChange} disabled={!selectedState}>
//             <option value="">Select City</option>
//             {selectedCountry && selectedState &&
//               Object.keys(countryStateCityDistrictData[selectedCountry][selectedState]).map((city, index) => (
//                 <option key={index} value={city}>
//                   {city}
//                 </option>
//               ))}
//           </select> */}
//           <br /><br />

//           {/* <select value={selectedDistrict} onChange={handleDistrictChange} disabled={!selectedCity}>
//             <option value="">Select District</option>
//             {selectedCountry && selectedState && selectedCity &&
//               countryStateCityDistrictData[selectedCountry][selectedState][selectedCity].map((district, index) => (
//                 <option key={index} value={district}>
//                   {district}
//                 </option>
//               ))}
//           </select> */}

//           <input type="text " onChange={handleDistrictChange} />
//           <br /><br />

//           <button type="submit">Save</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default District;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import './district.css'

const District = () => {
  const countryStateCityDistrictData = {
    USA: {
      Alabama: {
        Birmingham: ['District 1', 'District 2'],
        Montgomery: ['District A', 'District B'],
        Mobile: ['District X', 'District Y'],
      },
      Alaska: {
        Anchorage: ['District 1', 'District 2'],
        Juneau: ['District A', 'District B'],
        Fairbanks: ['District X', 'District Y'],
      },
    },
    India: {
      'Andhra Pradesh': {
        Visakhapatnam: ['District 1', 'District 2'],
        Vijayawada: ['District A', 'District B'],
        Guntur: ['District X', 'District Y'],
      },
      'Arunachal Pradesh': {
        Itanagar: ['District 1', 'District 2'],
        Naharlagun: ['District A', 'District B'],
        Pasighat: ['District X', 'District Y'],
      },
    },
    Russia: {
      'Moscow Oblast': {
        Moscow: ['District 1', 'District 2'],
        Zelenograd: ['District A', 'District B'],
        Khimki: ['District X', 'District Y'],
      },
      'Saint Petersburg': {
        Saint_Petersburg: ['District 1', 'District 2'],
        Kolpino: ['District A', 'District B'],
        Pushkin: ['District X', 'District Y'],
      },
    },
    Australia: {
      'New South Wales': {
        Sydney: ['District 1', 'District 2'],
        Newcastle: ['District A', 'District B'],
        Wollongong: ['District X', 'District Y'],
      },
      Victoria: {
        Melbourne: ['District 1', 'District 2'],
        Geelong: ['District A', 'District B'],
        Ballarat: ['District X', 'District Y'],
      },
    },
    Germany: {
      Bavaria: {
        Munich: ['District 1', 'District 2'],
        Nuremberg: ['District A', 'District B'],
        Augsburg: ['District X', 'District Y'],
      },
      'North Rhine-Westphalia': {
        Cologne: ['District 1', 'District 2'],
        Düsseldorf: ['District A', 'District B'],
        Dortmund: ['District X', 'District Y'],
      },
    }
  };

  const countries = Object.keys(countryStateCityDistrictData);

  const [formStates, setFormStates] = useState({
    country: '',
    state: '',
    
   
    district: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormStates((prevState) => ({
      ...prevState,
      [name]: value,
      ...(name === 'country' && { state:  '' }),
      ...(name === 'state' && {district: '' }),
    }));
  };

  const handleCityInputChange = (e) => {
    setFormStates((prevState) => ({
      ...prevState,
      district: e.target.value,
    }));
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    // const { selectedCountry, selectedState, selectedCity, cityInput } = formState;
    // const newCity = { country: selectedCountry, state: selectedState, city: selectedCity || cityInput };
    // let savedCities = JSON.parse(localStorage.getItem('cities')) || [];
    // savedCities.push(newCity);
    // localStorage.setItem('cities', JSON.stringify(savedCities));
    try {
      const response = await fetch('http://localhost:9998/api/district',{
        method: 'POST',
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(formStates)
      })
      if(response.ok){
        const res_data = await response.json()
        console.log(res_data)
        
        setFormStates({
          country: '',
          state: '',
   
    
          district: '',
          
        })
        navigate(`/district`);
      }
      console.log("errrrrrr")
    } catch (error) {
      console.log("state",error)
    }
    
    
  };

  return (
    <>
      <div><Sidebar/></div>
      
      <div>
        <h2>City</h2>
        <p className='para'>This is the city selection page.</p>

        <form className='form' onSubmit={handleSubmit}>
          <select name="country" value={formStates.country} onChange={handleChange}>
            <option value="">Select Country</option>
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
          <br /><br />

          <select name="state" value={formStates.state} onChange={handleChange} disabled={!formStates.country}>
            <option value="">Select State</option>
            {formStates.country &&
              Object.keys(countryStateCityDistrictData[formStates.country]).map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
          </select>
          <br /><br />

          {/* <select name="selectedCity" value={formState.selectedCity} onChange={handleChange} disabled={!formState.selectedState}>
            <option value="">Select City</option>
            {formState.selectedCountry && formState.selectedState &&
              Object.keys(countryStateCityDistrictData[formState.selectedCountry][formState.selectedState]).map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
          </select> */}
          <br /><br />

          {/* <select name="selectedDistrict" value={formState.selectedDistrict} onChange={handleChange} disabled={!formState.selectedCity}>
            <option value="">Select District</option>
            {formState.selectedCountry && formState.selectedState && formState.selectedCity &&
              countryStateCityDistrictData[formState.selectedCountry][formState.selectedState][formState.selectedCity].map((district, index) => (
                <option key={index} value={district}>
                  {district}
                </option>
              ))}
          </select> */}

          <br /><br />

          <input
            type="text"
            name="district"
            value={formStates.district}
            onChange={handleCityInputChange}
            placeholder="Enter district if not listed"
          />

          <br /><br />

          <button type="submit">Save</button>
        </form>
      </div>
    </>
  );
};

export default District;

