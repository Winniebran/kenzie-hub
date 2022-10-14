import axios from "axios";

const token = localStorage.getItem("@kenzieHub:token")
export const ApiRequests = axios.create({
  baseURL: "https://kenziehub.herokuapp.com",
  timeout: 5000,
  headers:{
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  }
});


