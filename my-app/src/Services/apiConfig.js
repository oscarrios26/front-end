// import axios from "axios";



// const api = axios.create({
//   baseURL: 
//     'https://carsinfo-p4.herokuapp.com/'

// })




// const api = axios.create({
//   baseURL:
//     process.env.NODE_ENV === "production"
//       ? "https://cars-info-p4.herokuapp.com/"
//       : "http://localhost:3000/api",
// });

// export default api;

import axios from "axios";

const getToken = () => {
  return new Promise(resolve => {
      resolve(`Bearer ${localStorage.getItem('token') || null}`)
  })
}

// const api = axios.create({
//   baseURL:
//     process.env.NODE_ENV === "production"
//       ? "https://cars-info-p4.herokuapp.com/"
//       : "http://127.0.0.1:8000/",
// });

const api = axios.create({
  baseURL: 
    'https://carsinfo-p4.herokuapp.com/'

})

// api.interceptors.request.use(async function (config) {
//   config.headers['Authorization'] = await getToken()
//   return config
// }, function (error) {
//   console.log('Request error: ', error)
//   return Promise.reject(error)
// });

export default api;


