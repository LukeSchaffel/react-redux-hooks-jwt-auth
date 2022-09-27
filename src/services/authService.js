import axios from "axios";

const API_URL = "http://localhost:8080/api/users";

export const register = async (name, email, password) => {
  const user = await axios.post(`${API_URL}/signup`, {
    name,
    email,
    password,
  });
  return user
};



export const login = async (email, password) => {
  const user = await axios.post(`${API_URL}/login`, {
      email,
      password,
    })
    console.log(user);
    // .then((response) => {
    //   if (response.data.accessToken) {
    //     localStorage.setItem("user", JSON.stringify(response.data));
    //   }

    //   return response.data;
    // });
};

export const logout = () => {
  localStorage.removeItem("user");
};

