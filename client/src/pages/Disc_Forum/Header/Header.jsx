// import React, { useState, useEffect, useRef } from "react";
// import SearchIcon from "@mui/icons-material/Search";
// import LogoutIcon from "@mui/icons-material/Logout";
// import "./Header.css";
// import { Link, useNavigate } from "react-router-dom";
// import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
// import { Avatar } from "@mui/material";

// function Header() {
//   const [user, setUser] = useState(null);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const dropdownRef = useRef(null);
//   const navigate = useNavigate();
//   const auth = getAuth();

//   // Track user state
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       console.log("Current user:", currentUser);
//       setUser(currentUser);
//     });
//     return () => unsubscribe();
//   }, [auth]);

//   // Auto-close dropdown on outside click
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setShowDropdown(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       alert("Logged out");
//       setShowDropdown(false);
//       navigate("/login");
//     } catch (error) {
//       console.error("Logout error:", error);
//     }
//   };

//   return (
//     <header>
    
//       <div className="header-container">
//         <div className="header-left">
//           <Link to="/disc_forum_homepage">
//             <h2>Discussion Forum</h2>
//           </Link>
//         </div>

//         <div className="header-right">
//           {user ? (
//             <>
//               <div className="user-menu" ref={dropdownRef}>
//                 <Avatar className="w-10 h-10" src={user?.photoURL || ""} />
              
//                 <span className="username">{user.displayName.split(" ")[0]}</span>
//                 {console.log(user.photoURL)}
               
            
//               </div>
//               <div className="sign-out-btn">
//                 <button onClick={handleLogout}><LogoutIcon /></button>
//                 <p>Sign Out</p>
//               </div>
              
//             </>
//           ) : (
//             <Link to="/login">Login</Link>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;

import React, { useState, useRef, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { message } from "antd";

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const auth = getAuth();

  const { forumUser } = useSelector((state) => state.users); // ✅ new

  // Auto-close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      message.success("Logged out successfully");
      setShowDropdown(false);
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
      message.error("Failed to log out");
    }
  };

  return (
    <header>
      <div className="header-container">
        <div className="header-left">
          <Link to="/disc_forum_homepage">
            <h2>Discussion Forum</h2>
          </Link>
        </div>

        <div className="header-right">
          {forumUser ? (
            <>
              <div className="user-menu" ref={dropdownRef}>
                <Avatar
                  className="w-10 h-10"
                  src={forumUser?.photoURL || ""}
                  alt={forumUser?.displayName || "User"}
                />
                <span className="username">
                  {forumUser?.displayName?.split(" ")[0] ||
                    forumUser?.email?.split("@")[0]}
                </span>
              </div>
              <div className="sign-out-btn">
                <button onClick={handleLogout}>
                  <LogoutIcon />
                </button>
                <p>Sign Out</p>
              </div>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
