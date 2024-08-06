import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import Country from './components/Country';
import State from './components/State';
import District from './components/District';
import City from './components/City';
import Pincode from './components/Pincode';
import PersonName from './components/PersonName';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Btn from './components/Btn.jsx';
import Logout from './components/Logout.jsx';
import Login from './components/Login.jsx';
import View from './components/View.jsx';
import NewUser from './components/Newuser.jsx';
import Edituser from './components/Edituser.jsx';
import StateView from './components/StateView.jsx';
import CountryView from './components/CountryView.jsx';
import DistrictView from './components/DistrictView.jsx';
import CityView from './components/CityView.jsx';
import PincodeView from './components/PincodeView.jsx';
import EditCountry from './components/EditCountry.jsx';
import EditState from './components/EditState.jsx';
import EditDistrict from './components/EditDistrict.jsx';
import EditCity from './components/EditCity.jsx';
import EditPincode from './components/EditPincode.jsx';
import EditPersonName from './components/EditPersonName.jsx';
import PersonNameView from './components/PersonNameView.jsx';
import { Register } from './components/Register.jsx';
import { useAuth } from './store/auth.jsx';
import Halfsidebar from './components/Halfside.jsx';
import Halfside from './components/Halfside.jsx';
import Chartss from './components/Chartss.jsx'
import TotalCities from './components/TotalCities.jsx';
import Charts2 from './components/Charts2.jsx'
import Charts3 from './components/Charts3.jsx'
import TotalCountries from './components/TotalCountry.jsx';
import TotalStates from './components/TotalStates.jsx';
import DSidebar from './components/DSidebar.jsx';
import Rusers from './components/Rusers.jsx'
import EditRegisteres from './components/EditRegisteres.jsx'



const App = () => {
const{cityListData} = useAuth()
 



  const handleSave = (country, state, city, district, pincode) => {
    setCountryStateCityDistrictData((prevData) => {
      const newData = { ...prevData };
      if (!newData[country]) newData[country] = {};
      if (!newData[country][state]) newData[country][state] = {};
      if (!newData[country][state][city]) newData[country][state][city] = {};
      if (!newData[country][state][city][district]) newData[country][state][city][district] = [];
      newData[country][state][city][district].push(pincode);
      return newData;
    });
  };

  const handleDelete = (country, state, city, district, pincode) => {
    setCountryStateCityDistrictData((prevData) => {
      const newData = { ...prevData };
      const pincodeIndex = newData[country][state][city][district].indexOf(pincode);
      if (pincodeIndex !== -1) {
        newData[country][state][city][district].splice(pincodeIndex, 1);
      }
      return newData;
    });
  };

  


  const [users, setUsers] = useState([
    { userNo: 1, userName: 'John Doe', userEmail: 'john@example.com', userPincode: '123456' },
    { userNo: 2, userName: 'Jane Smith', userEmail: 'jane@example.com', userPincode: '654321' },
  ]);

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const deleteUser = (userNo) => {
    const updatedUsers = users.filter(user => user.userNo !== userNo);
    setUsers(updatedUsers);
  };

  const updateUser = (updatedUser) => {
    const updatedUsers = users.map(user =>
      user.userNo === updatedUser.userNo ? updatedUser : user
    );
    setUsers(updatedUsers);
  };

  const {countryListData} = useAuth

  const [states, setStates] = React.useState([
    { country: 'USA', state: 'California' },
    { country: 'Canada', state: 'Alberta' },
    // Add more initial states as needed
  ]);

  const countryStateData = {
    USA: [
      'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
      //... (Other states)
    ],
    Canada: [
      'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador',
      //... (Other states)
    ],
    India: [
      'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat',
      //... (Other states)
    ],
    //... (Other countries)
  };

  const addState = (country, state) => {
    setStates([...states, { country, state }]);
  };

  const addPerson = ()=>{
    setFormData([...formdata,{}])
  }

  const [countries, setCountries] = React.useState([
    'USA', 'Canada', 'Mexico', 'India', 'Australia', 'Brazil', 'UK', 'Germany', 'Japan', 'China',
  ]);

  const addCountry = (newCountry) => {
    setCountries([...countries, newCountry]);
  };



  const [countryStateCityDistrictData, setCountryStateCityDistrictData] = React.useState({
    USA: {
      Alabama: {
        Birmingham: { 'District 1': ['12345', '12346'], 'District 2': ['12347', '12348'] },
      },
      Alaska: {
        Anchorage: { 'District 1': ['22345', '22346'], 'District 2': ['22347', '22348'] },
      },
    },
    Canada: {
      Alberta: {
        Calgary: { 'District 1': ['32345', '32346'], 'District 2': ['32347', '32348'] },
      },
      'British Columbia': {
        Vancouver: { 'District 1': ['42345', '42346'], 'District 2': ['42347', '42348'] },
      },
    },
    India: {
      Andhra_Pradesh: {
        Visakhapatnam: { 'District 1': ['52345', '52346'], 'District 2': ['52347', '52348'] },
      },
      Arunachal_Pradesh: {
        Itanagar: { 'District 1': ['62345', '62346'], 'District 2': ['62347', '62348'] },
      },
    },
  });



  const { isLoggedIn, token } = useAuth();



  

  // const addPincode = (country, state, city, district, pincode) => {
  //   setCountryStateCityDistrictData((prevData) => {
  //     const updatedData = { ...prevData };
  //     if (!updatedData[country]) {
  //       updatedData[country] = {};
  //     }
  //     if (!updatedData[country][state]) {
  //       updatedData[country][state] = {};
  //     }
  //     if (!updatedData[country][state][city]) {
  //       updatedData[country][state][city] = {};
  //     }
  //     if (!updatedData[country][state][city][district]) {
  //       updatedData[country][state][city][district] = [];
  //     }
  //     updatedData[country][state][city][district].push(pincode);
  //     return updatedData;
  //   });
  // };


  // const mockCityListData = {
  //   'USA': {
  //     'California': {
  //       'Los Angeles': {
  //         'District 1': ['90001', '90002'],
  //         'District 2': ['90003', '90004']
  //       },
  //       'San Francisco': {
  //         'District 1': ['94101', '94102'],
  //         'District 2': ['94103', '94104']
  //       }
  //     },
  //     'Texas': {
  //       'Houston': {
  //         'District 1': ['77001', '77002'],
  //         'District 2': ['77003', '77004']
  //       },
  //       'Dallas': {
  //         'District 1': ['75201', '75202'],
  //         'District 2': ['75203', '75204']
  //       }
  //     }
  //   },
  //   'Canada': {
  //     'Ontario': {
  //       'Toronto': {
  //         'District 1': ['M5A', 'M5B'],
  //         'District 2': ['M5C', 'M5D']
  //       },
  //       'Ottawa': {
  //         'District 1': ['K1A', 'K1B'],
  //         'District 2': ['K1C', 'K1D']
  //       }
  //     },
  //     'British Columbia': {
  //       'Vancouver': {
  //         'District 1': ['V5A', 'V5B'],
  //         'District 2': ['V5C', 'V5D']
  //       },
  //       'Victoria': {
  //         'District 1': ['V8N', 'V8P'],
  //         'District 2': ['V8R', 'V8S']
  //       }
  //     }
  //   },
  //   'India': {
  //     'Maharashtra': {
  //       'Mumbai': {
  //         'District 1': ['400001', '400002'],
  //         'District 2': ['400003', '400004']
  //       },
  //       'Pune': {
  //         'District 1': ['411001', '411002'],
  //         'District 2': ['411003', '411004']
  //       }
  //     },
  //     'Delhi': {
  //       'New Delhi': {
  //         'District 1': ['110001', '110002'],
  //         'District 2': ['110003', '110004']
  //       },
  //       'Old Delhi': {
  //         'District 1': ['110005', '110006'],
  //         'District 2': ['110007', '110008']
  //       }
  //     }
  //   }
  // };


  // const mockStateData = [
  //   { "_id": "669f43c830eddfe6bae85fea", "country": "Indiaawq", "state": "tttttttttfffff", "__v": 0 },
  //   { "_id": "669f5907e5e041569486fbb8", "country": "669f3ecc88c33aafcacf9cd4", "state": "Uttar Pradesh", "__v": 0 },
  //   { "_id": "66a1f817a05674e976310ae3", "country": "ukkkkkk", "state": "Uttar Pradesh", "__v": 0 },
  //   { "_id": "66a1f87da05674e976310ae5", "country": "USA", "state": "jsdjhsdw", "__v": 0 },
  //   { "_id": "66a1f8b6a05674e976310ae7", "country": "India", "state": "odishaaaaa", "__v": 0 },
  //   { "_id": "66a1f8e3a05674e976310ae9", "country": "Canada", "state": "alalbama", "__v": 0 },
  //   { "_id": "66a49445dac02207a391c9be", "country": "India", "state": "murmur", "__v": 0 }
  // ];


  // const mockCountryData = [
  //   { "_id": "669f3ecc88c33aafcacf9cd4", "country": "austriaaa", "__v": 0 },
  //   { "_id": "669f3f2d88c33aafcacf9cd6", "country": "USSSAusttrr", "__v": 0 },
  //   { "_id": "669f4308d9bef5f01a284468", "country": "INDIA", "__v": 0 },
  //   { "_id": "669f4346d9bef5f01a28446a", "country": "INDIA", "__v": 0 },
  //   { "_id": "66a1de8ea05674e976310acc", "country": "ukraine", "__v": 0 },
  //   { "_id": "66a1deaca05674e976310ace", "country": "CANADA", "__v": 0 },
  //   { "_id": "66a48f3bfe1fa568d9aa92fa", "country": "kingdomrastogi", "__v": 0 },
  //   { "_id": "66a9fd6801c3899669582de9", "country": "kryptyo", "__v": 0 }
  // ];
  

  
  return (
    
    <Router>
      
      <div className="App">
        
        {/* <Charts/> */}

        {/* <Navbar/> */}
        {/* <Sidebar /> */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Users" element={<View  users={users} deleteUser={deleteUser}/>} />
            <Route path="/newuser" element={<NewUser addUser={addUser}/>} />
            <Route path="/edituser/:userId" element={<Edituser  users={users} updateUser={updateUser}/>}/>
            <Route path="/dashboard" element={<Sidebar/>} />
            <Route path="/country"element={<CountryView countries={countryListData}/>} />
            <Route path="/country-view" element={<Country onAddCountry={addCountry} countries={countries}/>} />
            <Route path="/country" element={<City onAddState={addState} countryStateData={countryStateData} />} />
            <Route path="/state" element={<StateView states={states}/>} />
            <Route path="/state-view" element={<State/>} />
            <Route path="/district" element={<DistrictView/>} />
            <Route path="/district-view" element={<District/>} />
            <Route path="/edit-state/:stateId" element={<EditState/>} />
            <Route path="/edit-district/:districtId" element={<EditDistrict/>} />
            <Route path="/edit-city/:cityId" element={<EditCity/>} />
            <Route path="/edit-RegisteredUser/:RegisteredUserId" element={<EditRegisteres/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/halfside" element={<Halfside/>} />
            
            <Route path="/city" element={<CityView/>} />
            <Route path="/city-view" element={<City/>} />
            <Route path="/edit-country/:countryId" element={<EditCountry/>} />
            <Route path="/pincode" element={<PincodeView countries={Object.keys(countryStateCityDistrictData)} countryStateCityDistrictData={countryStateCityDistrictData} 
        onDelete={handleDelete}  />}/>
        <Route path="/pincode-edit/:pincodeId" element={<EditPincode/>} />
            <Route path="/pincode-view"    element={<Pincode countryStateCityDistrictData={countryStateCityDistrictData} onSave={handleSave} />}/>
            <Route path="/person-name-view" element={<PersonName/>} />
            <Route path="/person-name" element={<PersonNameView/>} />
            <Route path="/person-name-edit/:personId" element={<EditPersonName/>} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/statistics" element={<DSidebar />} />
            <Route path="/Rusers" element={<Rusers />} />


          </Routes>
        </div>
        {/* <Btn/> */}
 {/* <div><Chartss/></div> */}
        <br />
        {/* <div><TotalCities data={mockCityListData} /></div> */}
        <br />
       {/* <div><Charts2/></div>  */}
        {/* <br />
        <div><Charts3/></div>  */}
        
        {/* <div> <TotalCountries data={mockCountryData} /></div> */}

        {/* <div> <TotalStates data={mockStateData} /></div> */}
       
      </div>
      
        <Routes>
        
        </Routes>
    </Router>
  );
};

export default App;

