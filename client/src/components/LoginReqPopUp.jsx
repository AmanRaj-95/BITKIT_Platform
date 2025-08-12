// src/components/LoginRequiredModal.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Login from "./GoogleAuth/Login";

const LoginReqPopUp = ({ show }) => {
  const navigate = useNavigate();

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full text-center">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Access Denied</h2>
        <p className="mb-6 text-gray-600">Please login to access this page.</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Go to HomePage
            
          </button>
          {/* <button
            onClick={() => navigate("/")}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition"
          >
            Cancel
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default LoginReqPopUp;
