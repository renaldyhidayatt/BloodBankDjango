import axios from "axios";
import { urlApi } from "../helpers/config";

export const authService = {
  login,
  register,
  logout,
};

function register(user) {
  return axios.post(`${urlApi}/users/register`, user);
}

function login(email, password) {
  return axios.post(`${urlApi}/users/login`, { email, password });
}

function logout() {
  localStorage.removeItem("token");
}
