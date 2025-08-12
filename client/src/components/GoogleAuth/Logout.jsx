// import { useAuth } from "../../context/AuthProvide";
// import { getAuth, signOut } from "firebase/auth";
// import { useNavigate } from "react-router-dom";

// const Logout = () => {
//   const [authUser, setAuthUser] = useAuth();
//   const auth = getAuth();
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       localStorage.removeItem("Users");
// localStorage.removeItem("BuySellUser");

//       setAuthUser(null); // ✅ clear user from context
//       alert("👋 Logged out");
//       navigate("/");
//     } catch (error) {
//       console.error("Logout failed:", error);
//     }
//   };

//   return (
//     <div>
//       {authUser && (
//         <button
//           className="bg-pink-500 text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
//           onClick={handleLogout}
//         >
//           Logout
//         </button>
//       )}
//     </div>
//   );
// };

// export default Logout;
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setForumUser, setBuySellUser } from "../../redux/usersSlice";
import { toast } from "react-hot-toast";
import { message } from "antd";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();
  const forumUser = useSelector((state) => state.users.forumUser);
  

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("Users");
      localStorage.removeItem("BuySellUser");

      dispatch(setForumUser(null));
      dispatch(setBuySellUser(null));

      //alert("👋 Logged out");
      message.success("Logged out successfully");
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
      // toast.error("Logout failed. Please try again.");
    }
  };

  return (
    <div>
      {forumUser && (
        <button
          className="bg-pink-500 text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
          onClick={handleLogout}
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Logout;

