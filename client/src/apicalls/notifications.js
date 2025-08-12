import { axiosInstance } from "./axiosInstance";

// add a notification
export const AddNotification = async (data) => {
  try {
    const response = await axiosInstance.post("/notifications/notify", data);
    return response.data;
  } catch (error) {
    console.log("Notification error:", error.response?.data || error.message); 
    return error.response.data;
  }
};

// get all notifications
export const GetAllNotifications = async () => {
  try {
    const response = await axiosInstance.get(
      "/notifications/get-all-notifications"
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// delete a notification
export const DeleteNotification = async (id) => {
  try {
    const response = await axiosInstance.delete(
      `/notifications/delete-notification/${id}`
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// read all notifications by user
export const ReadAllNotifications = async () => {
  try {
    const response = await axiosInstance.put(
      "/notifications/read-all-notifications"
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
