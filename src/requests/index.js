import axios from "axios";
axios.defaults.withCredentials = true;

export default axios.create({
  baseURL: "/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});