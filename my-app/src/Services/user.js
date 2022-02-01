import api from "./apiConfig";

export const logIn = async (credentials) => {
  try {
    const res = await api.post("/login/", credentials);
    localStorage.setItem("token", res.data.access);
    localStorage.setItem("refresh", res.data.refresh);
    console.log(res);
    return res;
  } catch (error) {
    throw error;
  }
};

export const logOut = async () => {
  try {
    localStorage.removeItem("token");
    localStorage.removeItem("refresh");
    return true;
  } catch (error) {
    throw error;
  }
};

export const verifyUser = async () => {
  const refresh = localStorage.getItem("refresh");
  if (refresh) {
    const res = await api.post("/refresh-token/", { refresh });
    localStorage.setItem("token", res.data.access);
    console.log(res);
    return res;
  }
  return false;
};




















// import api from './apiConfig'
// import jwtDecode from 'jwt-decode'

// export const signUp = async (credentials) => {
//   try {
//     const resp = await api.post('user/signup', credentials)
//     localStorage.setItem('token', resp.data.token)
//     const user = jwtDecode(resp.data.token)
//     return user
//   } catch (error) {
//     throw error
//   }
// }

// export const signIn = async (credentials) => {
//   try {
//     const resp = await api.post('user/login/', credentials)
//     localStorage.setItem('token', resp.data.token)
//     const user = jwtDecode(resp.data.token)
//     return user
//   } catch (error) {
//     throw error
//   }
// }

// export const signOut = async () => {
//   try {
//     localStorage.removeItem('token')
//     return true
//   } catch (error) {
//     throw error
//   }
// }

// export const changePassword = async (passwords, user) => {
//   try {
//     const resp = await api.post('/')
//     return resp.data
//   } catch (error) {
//     throw error
//   }
// }

// export const verifyUser = async () => {
//   const token = localStorage.getItem('token')
//   if (token) {
//     const res = await api.get('/verify')
//     return res.data
//   }
//   return false
// }