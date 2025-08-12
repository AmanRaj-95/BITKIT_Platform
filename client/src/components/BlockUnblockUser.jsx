import React, { useState } from "react";
import { useSelector } from "react-redux";
import { message, Modal } from "antd";
import axiosInstance from "../utils/axiosInstance"; // Adjust path if needed

function BlockUnblockUser() {
  const { forumUser } = useSelector((state) => state.users);
  const allowedEmail = import.meta.env.VITE_ADMIN_EMAIL;

  const [uid, setUid] = useState("");

  if (forumUser?.email !== allowedEmail) {
    return (
      <p className="text-red-500 text-center mt-10 text-lg font-semibold">
        ⛔ Access Denied: Only authorized users can access this page.
      </p>
    );
  }

  const handleAction = (selectedAction) => {
    if (!uid.trim()) {
      return message.warning("Please enter a Firebase UID");
    }

    Modal.confirm({
      title: selectedAction === "block" ? "Confirm Block" : "Confirm Unblock",
      content: `Are you sure you want to ${selectedAction} this user?`,
      okText: "Yes",
      cancelText: "No",
      okType: selectedAction === "block" ? "danger" : "primary",
      onOk: async () => {
        const route = selectedAction === "block" ? "/block-user" : "/unblock-user";
        const payloadKey = selectedAction === "block" ? "uidToBlock" : "uidToUnblock";

        try {
          await axiosInstance.post(route, { [payloadKey]: uid });
          message.success(`User has been ${selectedAction}ed successfully`);
          setUid("");
        } catch (err) {
          console.error(`Error during ${selectedAction}:`, err);
          message.error(
            err.response?.data?.message || `Failed to ${selectedAction} user`
          );
        }
      },
    });
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4 text-center text-gray-800 dark:text-white">
        Block / Unblock User
      </h2>
      <input
        type="text"
        placeholder="Enter Firebase UID"
        className="w-full border px-3 py-2 rounded mb-6 dark:bg-gray-700 dark:text-white"
        value={uid}
        onChange={(e) => setUid(e.target.value)}
      />
      <div className="flex justify-between gap-4">
        <button
          onClick={() => handleAction("block")}
          className="w-1/2 bg-red-600 text-white py-2 rounded hover:bg-red-700"
        >
          🔒 Block
        </button>
        <button
          onClick={() => handleAction("unblock")}
          className="w-1/2 bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          🔓 Unblock
        </button>
      </div>
    </div>
  );
}

export default BlockUnblockUser;
