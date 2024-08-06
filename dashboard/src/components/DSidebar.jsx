import React from 'react'
import Sidebar from './Sidebar'
import Chartss from './Chartss.jsx'
import TotalCities from './TotalCities.jsx';
import Charts2 from './Charts2.jsx'
import Charts3 from './Charts3.jsx'
import TotalCountries from './TotalCountry.jsx';
import TotalStates from './TotalStates.jsx';
import './Dsidebar.css'
import Charts4 from './Charts4.jsx'

const DSidebar = () => {
    const mockCityListData = {
       "India": {
    "Andhra Pradesh": {
      "District 1": ["345001"],
      "District 0": ["987678"]
    }
  },
  "Russia": {
    "Moscow Oblast": {
      "District 1": ["9898989"]
    }
  }
      };
    
    
      const mockStateData = [
        {
            "_id": "66ac6d3a158c00d9fc0110b6",
            "country": "India",
            "state": "Uttar Pradesh",
            "__v": 0
        },
        {
            "_id": "66ac6d44158c00d9fc0110b8",
            "country": "USA",
            "state": "Albama",
            "__v": 0
        },
        {
            "_id": "66ac6d59158c00d9fc0110ba",
            "country": "Russia",
            "state": "Moscow",
            "__v": 0
        },
        {
            "_id": "66ac6d65158c00d9fc0110bc",
            "country": "India",
            "state": "Bihar",
            "__v": 0
        },
        {
            "_id": "66ac6d74158c00d9fc0110be",
            "country": "Germany",
            "state": "Bavaria",
            "__v": 0
        }
      ];
    
    
      const mockCountryData = [
        {
            "_id": "66ac6b35158c00d9fc01109e",
            "country": "India",
            "__v": 0
        },
        {
            "_id": "66ac6b3e158c00d9fc0110a0",
            "country": "USA",
            "__v": 0
        },
        {
            "_id": "66ac6b4e158c00d9fc0110a2",
            "country": "Russia",
            "__v": 0
        },
        {
            "_id": "66ac6b54158c00d9fc0110a4",
            "country": "Germany",
            "__v": 0
        },
        {
            "_id": "66ac6b5f158c00d9fc0110a6",
            "country": "Australia",
            "__v": 0
        }
      ];
      
    


  return (

    <>
     <div><Sidebar/></div>


     <div className="Dcontainer">



     <div className="Dcontent">



     <div className='mainD'></div>

<div className='chartss'><Chartss/></div> 
   <br />
   <div className='totalcities'><TotalCities data={mockCityListData} /></div>
   <br />
  <div className='charts2'><Charts2/></div> 
   <br />
   <div className='charts3'><Charts3/></div> 
   
   <div className='totalcountries'> <TotalCountries data={mockCountryData} /></div>

   <div className='totalstates'>  <TotalStates data={mockStateData} /></div>

   <div className='statecountry'><Charts4/></div>

     </div>
     



     </div>


     
    </>
   
  )
}

export default DSidebar