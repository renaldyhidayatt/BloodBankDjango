import axios from "axios";
// import { urlApi } from "../helpers/config";

export const authService = {
  login,
  register,
  logout,
};

const urlApi = "http://localhost:8000";

function register(user) {
  return axios.post(`${urlApi}/api/users/register`, user);
}

function login(email, password) {
  return axios.post(`${urlApi}/api/users/login`, { email, password });
}

function logout() {
  localStorage.removeItem("user");
}
