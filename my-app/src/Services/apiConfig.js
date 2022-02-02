

import axios from "axios";



// const api = axios.create({
//   baseURL:
//     process.env.NODE_ENV === "production"
//       ? "https://carsinfo-p4.herokuapp.com/"
      
//       : "http://127.0.0.1:8000/",
// });

const api = axios.create({
  baseURL: 
    'https://carsinfo-p4.herokuapp.com/'

})


export default api;


