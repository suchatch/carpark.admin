import axios from "axios";

const API_URL = "/api/";

// Register user
const register = async (userData:any) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Login user
const login = async (userData:any) => {
    console.log(userData)
    const response = await axios.post(`${import.meta.env.VITE_REACT_APP_API}/auth/signin`, userData)
    console.log(response.status)
    if (response.status === 201) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
};

//ดึงข้อมูล token
// const gettoken=()=>{
//   if(window !=="undefined"){
//       if(localStorage.getItem("user")){
//           return JSON.parse(localStorage.getItem("user"))
//       }else{
//           return false
//       }
//   }
// }

// change password
// const changePasswordOld = async (userData:any) => {

//   const config = {
//     headers: {
//       Authorization: `Bearer ${gettoken().token}`,
//     },
//   };

//   const response = await axios.post(`${import.meta.env.VITE_REACT_APP_API}/checkpasswordold`, userData.data, config)

//   if(response.status === 200){
//     return response.data
//   }
// }

const authService = {
  register,
  logout,
  login
};

export default authService;
