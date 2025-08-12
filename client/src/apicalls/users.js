// import { axiosInstance } from "./axiosInstance";
import axiosInstance from "../utils/axiosInstance";

// register user
export const RegisterUser = async (payload) => {
  try {
    const response = await axiosInstance.post("/buy-sell/users/register", payload);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

// login user
export const LoginUser = async (payload) => {
  try {
    const response = await axiosInstance.post("/buy-sell/users/login", payload);

    // Debug: check if user and role are present
    console.log("Login Response:", response.data);

    return response.data; // contains { success, message, data: { token, user } }
  } catch (error) {
    // Improved error handling
    if (error.response?.data) {
      return error.response.data;
    }
    return {
      success: false,
      message: error.message,
    };
  }
};


// get current user
export const GetCurrentUser = async () => {
  try {
    const response = await axiosInstance.get("/buy-sell/users/get-current-user");
    return response.data;
  } catch (error) {
    return error.message;
  }
};

// get all users
export const GetAllUsers = async () => {
  try {
    const response = await axiosInstance.get("/buy-sell/users/get-users");
    return response.data;
  } catch (error) {
    return error.message;
  }
};

// update user status
export const UpdateUserStatus = async (id, status) => {
  try {
    const response = await axiosInstance.put(
      `/buy-sell/users/update-user-status/${id}`,
      { status }
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};
