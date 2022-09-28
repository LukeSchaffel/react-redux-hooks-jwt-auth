import axios from "axios";
import * as tokenService from './tokenService'

const API_URL = "http://localhost:8080/api/users";

export const signup = async (name, email, password) => {
  const user = await axios.post(`${API_URL}/signup`, {
    name,
    email,
    password,
  });
  return user
};



export const login = async (email, password) => {
  const res = await axios.post(`${API_URL}/login`, {
    headers: { 'Content-Type': 'application/json' },
    email,
    password,
  })
  const data = res.data
  if (data.accessToken) {
    tokenService.setToken(data.accessToken)
  }
  return data
};

export const getAllUsers = async (user) => {
  const token = tokenService.getToken()
  const res = await axios.get(`${API_URL}`, {
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    }
  })
  const users = res.data
  return users
}


export const logout = () => {
  tokenService.removeToken();
};

