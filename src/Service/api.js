import axios from "axios";

const usersUrl = "https://resolute-backend.onrender.com/users";

export const getUsers = async (id) => {
  id = id || "";
  try {
    return await axios.get(`${usersUrl}`);
  } catch (error) {
    console.log("Error while calling getUsers api ", error);
  }
};

export const addUser = async (user) => {
  return await axios.post(`${usersUrl}`, user);
};

export const deleteUser = async (id) => {
  return await axios.delete(`${usersUrl}/:?id=${id}`);
};

export const editUser = async (id, user) => {
  return await axios.put(`${usersUrl}/:?id=${id}`, user);
};
