
import React, { useState } from "react";
import { auth, provider } from "../../firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setForumUser, setBuySellUser } from "../../redux/usersSlice";
import { message, Spin } from "antd";
import { setLoader } from "../../redux/loadersSlice";

provider.setCustomParameters({
  prompt: "select_account",
});

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showLoginSpinner, setShowLoginSpinner] = useState(false); // 🔄 local loader

  const handleGoogleLogin = () => {
    setShowLoginSpinner(true);

    setTimeout(async () => {
      try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        const email = user.email;
        const domain = email.split("@")[1];

        if (domain !== "bitmesra.ac.in") {
          message.error("Access denied. Use your BIT Mesra email.");
          await signOut(auth);
          return;
        }

        const token = await user.getIdToken();

        const apiBaseUrl =
          process.env.NODE_ENV === "production"
            ? "https://bitkit-server.onrender.com/api/v1"
            : "/api/v1";

        const response = await fetch(`${apiBaseUrl}/forum/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({}),
        });

        const data = await response.json();

        if (response.ok) {
          localStorage.setItem("Users", JSON.stringify(data.forumUser));
          localStorage.setItem("BuySellUser", JSON.stringify(data.buySellUser));

          dispatch(setForumUser(data.forumUser));
          dispatch(setBuySellUser(data.buySellUser));

          document.getElementById("my_modal_5").close();
          message.success({
            content: `Welcome ${user.displayName}`,
            duration: 5,
            style: { fontSize: "16px" },
          });

          navigate("/");
        } else {
          message.error("Server rejected access");
          await signOut(auth);
        }
      } catch (error) {
        console.error("Login error:", error);
        if (error.code !== "auth/popup-closed-by-user") {
          message.error("Something went wrong during login.");
        }
        // ❌ Do nothing if popup was closed manually
      } finally {
        setShowLoginSpinner(false);
      }
    }, 100);
  };

  return (
    <div className="dark:bg-slate-900 dark:text-black">
      <dialog
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle md:ml-2"
      >
        <div className="modal-box relative">
          <button
            type="button"
            onClick={() => document.getElementById("my_modal_5").close()}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>

          <h3 className="font-bold text-2xl text-center">
            Welcome to <span className="text-pink-500">BiTKiT</span>
          </h3>
          <h5 className="py-2 text-center">
            Sign in with your BIT Mesra Google Account{" "}
            <i className="fa-solid fa-circle-info fa-xl"></i>
          </h5>

          <div className="flex flex-col items-center mt-6 relative">
            {showLoginSpinner ? (
              <Spin tip="Redirecting to Google..." size="large" />
            ) : (
              <button
                onClick={handleGoogleLogin}
                className="bg-pink-500 text-white rounded-md px-6 py-2 hover:bg-pink-700 duration-200 shadow-md"
              >
                <i className="fa-brands fa-google mr-2"></i> Sign in with Google
              </button>
            )}
            <p className="text-sm text-gray-600 mt-4 text-center">
              Only{" "}
              <span className="font-semibold text-blue-600">
                bitmesra.ac.in
              </span>{" "}
              emails are allowed.
            </p>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Login;

