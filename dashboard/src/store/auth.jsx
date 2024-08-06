import { children, createContext, useState, useEffect } from "react";
import { useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState();
  // const [ tokens , setTokens] = useState(true)
  // const ,se] = useState(!token)
  const [countryListData, setCountryListData] = useState("");
  const [stateListData, setStateListData] = useState("");
  const [districtListData, setDistrictListData] = useState("");
  const [cityListData, setCityListData] = useState("");
  const [pincodeListData, setPincodeListData] = useState("");
  const [nameListData, setNameListData] = useState("");
  const [memberListData, setMemberListData] = useState("");
  const [registeruserData , setRegisteruserData] = useState([])
  const storeToeknInLS = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };

  // useEffect(()=>{
  //     setToken()
  // },[localStorage.getItem("token")])

  // const LoginSidebar = ()=>{
  // if(tokens===null){
  //     setTokens(false)
  // }else{
  //     setTokens(true)
  // }
  // }

  //tackling phout functionaloty
  const LogoutUser = () => {
    //setToken("")
    return localStorage.removeItem("token");
  };

  const countryData = async () => {
    try {
      const response = await fetch("http://localhost:9998/api/country-list", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        // body: JSON.stringify(countryListData)
      });
      if (response.ok) {
        const cData = await response.json();
        console.log(cData);
        setCountryListData(cData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const stateData = async () => {
    try {
      const response = await fetch("http://localhost:9998/api/statelist", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        // body: JSON.stringify(countryListData)
      });
      if (response.ok) {
        const sData = await response.json();
        console.log(sData);
        setStateListData(sData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const districtData = async () => {
    try {
      const response = await fetch("http://localhost:9998/api/districtlist", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        // body: JSON.stringify(countryListData)
      });
      if (response.ok) {
        const dData = await response.json();
        console.log(dData);
        setDistrictListData(dData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const cityData = async () => {
    try {
      const response = await fetch("http://localhost:9998/api/citylist", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        // body: JSON.stringify(countryListData)
      });
      if (response.ok) {
        const cData = await response.json();
        console.log(cData);
        setCityListData(cData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const pincodeData = async () => {
    try {
      const response = await fetch("http://localhost:9998/api/pincodelist", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        // body: JSON.stringify(countryListData)
      });
      if (response.ok) {
        const pData = await response.json();
        console.log(pData);
        setPincodeListData(pData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const nameData = async () => {
    try {
      const response = await fetch("http://localhost:9998/api/namelist", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        // body: JSON.stringify(countryListData)
      });
      if (response.ok) {
        const nData = await response.json();
        console.log(nData);
        setNameListData(nData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const memberData = async () => {
    try {
      const response = await fetch("http://localhost:9998/api/memberlist", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        // body: JSON.stringify(countryListData)
      });
      if (response.ok) {
        const mData = await response.json();
        console.log(mData);
        setMemberListData(mData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateUser = async (updatedUser) => {
    try {
      const response = await fetch(
        `http://localhost:9998/api/member-id/${updatedUser.id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedUser),
        }
      );
      if (response.ok) {
        const updatedMemberListData = memberListData.map((user) =>
          user._id === updatedUser.id ? updatedUser : user
        );
        setMemberListData(updatedMemberListData);
      } else {
        console.error("Update failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const updateCountry = async (updatedCountry) => {
    try {
      const response = await fetch(
        `http://localhost:9998/api/country-id/${updatedCountry.id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedCountry),
        }
      );
      if (response.ok) {
        const updatedCountryListData = countryListData.map((country) =>
          country._id === updatedCountry.id ? updatedCountry : country
        );
        setCountryListData(updatedCountryListData);
      } else {
        console.error("Update failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const updateState = async (updatedState) => {
    try {
      const response = await fetch(
        `http://localhost:9998/api/state-id/${updatedState.id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedState),
        }
      );
      if (response.ok) {
        const updatedStateListData = stateListData.map((state) =>
          state._id === updatedState.id ? updatedState : state
        );
        setStateListData(updatedStateListData);
      } else {
        console.error("Update failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const updateDistrict = async (updatedDistrict) => {
    try {
      const response = await fetch(
        `http://localhost:9998/api/district-id/${updatedDistrict.id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedDistrict),
        }
      );
      if (response.ok) {
        const updatedDistrictListData = districtListData.map((district) =>
          district._id === updatedDistrict.id ? updatedDistrict : district
        );
        setDistrictListData(updatedDistrictListData);
      } else {
        console.error("Update failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const updateCity = async (updatedCity) => {
    try {
      const response = await fetch(
        `http://localhost:9998/api/city-id/${updatedCity.id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedCity),
        }
      );
      if (response.ok) {
        const updatedCityListData = cityListData.map((city) =>
          city._id === updatedCity.id ? updatedCity : city
        );
        setCityListData(updatedCityListData);
      } else {
        console.error("Update failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };


  const updatePincode = async (updatedPincode) => {
    try {
      const response = await fetch(`http://localhost:9998/api/name-id/${updatedPincode.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedPincode),
      });
      if (response.ok) {
        const updatedPincodeListData = pincodeListData.map(pincode =>
          pincode._id === updatedPincode.id ? updatedPincode : pincode
        );
        setPincodeListData(updatedPincodeListData);
      } else {
        console.error("Update failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const updatePersonName = async (updatedPersonName) => {
    try {
      const response = await fetch(`http://localhost:9998/api/name-id/${updatedPersonName.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedPersonName),
      });
      if (response.ok) {
        const updatedPersonNameListData = nameListData.map(personName =>
          personName._id === updatedPersonName.id ? updatedPersonName : personName
        );
        setNameListData(updatedPersonNameListData);
      } else {
        console.error("Update failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const updateRegisteredUser = async (updatedUser) => {
    try {
      const response = await fetch(`http://localhost:9998/api/editRegisteredUser-id/${updatedUser.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedUser),
      });
      if (response.ok) {
        const updatedRegisterUserListData = registeruserData.map(user =>
          user._id === updatedUser.id ? updatedUser : user
        );
        setRegisteruserData(updatedRegisterUserListData);
      } else {
        console.error("Update failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  

  const RegisterUserData = async () => {
    try {
      const response = await fetch("http://localhost:9998/api/registerUserlist", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        // body: JSON.stringify(countryListData)
      });
      if (response.ok) {
        const RUData = await response.json();
        console.log(RUData);
        setRegisteruserData(RUData);
      }
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {
    countryData();
  }, []);

  useEffect(() => {
    stateData();
  }, []);

  useEffect(() => {
    districtData();
  }, []);

  useEffect(() => {
    cityData();
  }, []);

  useEffect(() => {
    pincodeData();
  }, []);

  useEffect(() => {
    nameData();
  }, []);

  useEffect(() => {
    memberData();
  }, []);

  useEffect(()=>{
    RegisterUserData()
  },[])

  return (
    <AuthContext.Provider
      value={{
        registeruserData,
        updateRegisteredUser,
        updatePersonName,
        updatePincode,
        updateCity,
        updateDistrict,
        updateState,
        updateCountry,
        updateUser,
        token,
        storeToeknInLS,
        LogoutUser,
        countryListData,
        stateListData,
        districtListData,
        cityListData,
        pincodeListData,
        nameListData,
        memberListData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const AuthContextValue = useContext(AuthContext);
  if (!AuthContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return AuthContextValue;
};
