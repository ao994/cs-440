import { findUserByEmail, createUser } from "../data/taskData.js";

export const loginUser = async (email, password) => {
  const user = await findUserByEmail(email);
  if (user) {
    return user.password === password ? "Success" : "The password is incorrect";
  } else {
    return "No record existed";
  }
};

export const registerUser = (userData) => createUser(userData);
