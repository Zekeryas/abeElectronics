import axios from "axios";

const axiosInstance = axios.create({
  // deployed version of abe electronics server on render.com
 
  baseURL: "https://abeelectronics-api-deploy.onrender.com"
});
export { axiosInstance };