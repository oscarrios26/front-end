import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://cars-info-p4.herokuapp.com/"
      : "http://localhost:3000/api",
});

export default api;