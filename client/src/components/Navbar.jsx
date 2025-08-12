
// import React, { useEffect, useState } from "react";
// import Login from "../components/GoogleAuth/Login";
// import Logout from "../components/GoogleAuth/Logout";
// import { useSelector } from "react-redux";
// import { Avatar } from "@mui/material";
// import { Link, useLocation } from "react-router-dom";

// function Navbar() {
//   const forumUser = useSelector((state) => state.users.forumUser);
//   const [isOthersOpen, setIsOthersOpen] = useState(false);
//   const [theme, setTheme] = useState(
//     localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
//   );
//   const location = useLocation();
//   const pathname = location.pathname;

//   const [sticky, setSticky] = useState(false);
//   useEffect(() => {
//     const handleScroll = () => {
//       setSticky(window.scrollY > 0);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Close "Others" dropdown when route changes
//   useEffect(() => {
//     setIsOthersOpen(false);
//   }, [pathname]);

//   // Theme logic
//   const element = document.documentElement;
//   useEffect(() => {
//     if (theme === "dark") {
//       element.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//       document.body.classList.add("dark");
//     } else {
//       element.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//       document.body.classList.remove("dark");
//     }
//   }, [theme]);

//   // Auto close dropdown + scroll to top
//   const closeOthersDropdownWithDelay = () => {
//     setTimeout(() => {
//       setIsOthersOpen(false);
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }, 2000);
//   };

//   const navLinkClasses = (path) =>
//     `relative py-2 px-2 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 
//      after:bg-pink-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 
//      hover:after:scale-x-100 ${pathname === path
//       ? "after:scale-x-100 font-semibold text-pink-600 dark:text-pink-400"
//       : ""
//     }`;

//   const navItems = (
//     <>
//       <li><Link to="/" className={navLinkClasses("/")}>Home</Link></li>
//       <li><Link to="/course" className={navLinkClasses("/course")}>Academics</Link></li>
//       <li><Link to="/buy-sell-home" className={navLinkClasses("/buy-sell-home")}>Buy & Sell</Link></li>
//       <li><Link to="/disc_forum_homepage" className={navLinkClasses("/disc_forum_homepage")}>Discussion Forum</Link></li>
//       <li><Link to="/clubs" className={navLinkClasses("/clubs")}>Clubs & Communities</Link></li>
//       <li className="dropdown dropdown-hover">
//         <details
//           className="dropdown"
//           open={isOthersOpen}
//           onClick={() => setIsOthersOpen(!isOthersOpen)}
//         >
//           <summary className="cursor-pointer py-2 px-2">Others</summary>
//           <ul className="p-2 bg-white dark:bg-slate-800 shadow rounded-md z-50 w-40">
//             <li>
//               <Link to="/sport" className={navLinkClasses("/sport")} onClick={closeOthersDropdownWithDelay}>Sports</Link>
//             </li>
//             <li>
//               <a
//                 href="https://www.bitotsav.com"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="block px-2 py-1 hover:bg-gray-200 dark:hover:bg-slate-700 rounded"
//                 onClick={closeOthersDropdownWithDelay}
//               >
//                 Bitotsav
//               </a>
//             </li>
//             <li>
//               <Link to="/downloads" className={navLinkClasses("/downloads")} onClick={closeOthersDropdownWithDelay}>Downloads</Link>
//             </li>
//             <li>
//             <a
//               href="https://ankonrh.github.io/cgpa-calculator/"
//               target="_blank"
//               rel="noreferrer"
//               className="block px-2 py-1 hover:bg-gray-200 dark:hover:bg-slate-700 rounded"
//               onClick={() => { closeOthersDropdownWithDelay(); handleMobileNavClose(); }}
//             >
//               CGPA Calculator
//             </a>
//           </li>
//           </ul>
//         </details>
//       </li>
//     </>
//   );

//   return (
//     <div className={`w-full sticky top-0 z-50 bg-white bg-opacity-95 dark:bg-slate-900 dark:text-white ${sticky ? "shadow-md dark:bg-slate-800 transition-all duration-300 ease-in-out" : ""
//       }`}
//     >
//       <div className="max-w-screen-2xl container mx-auto md:px-5">
//         <div className="navbar">
//           <div className="navbar-start">
//             <div className="dropdown">
//               <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
//                 </svg>
//               </div>
//               <ul
//                 tabIndex={0}
//                 className="menu menu-sm dropdown-content bg-white dark:bg-slate-800 text-black dark:text-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
//               >
//                 {navItems}
//               </ul>
//             </div>
//             <a href="/" className="text-3xl font-bold cursor-pointer text-pink-500">BiTKiT</a>
//           </div>

//           <div className="navbar-center hidden lg:flex">
//             <ul className="menu menu-horizontal px-1 gap-3">{navItems}</ul>
//           </div>

//           <div className="navbar-end space-x-3">
//             {/* Theme Switcher */}
//             <label className="swap swap-rotate">
//               <input
//                 type="checkbox"
//                 className="theme-controller"
//                 checked={theme === "dark"}
//                 onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
//               />
//               <svg
//                 className="swap-off h-8 w-8 fill-current"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
//               </svg>
//               <svg
//                 className="swap-on h-8 w-8 fill-current"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
//               </svg>
//             </label>

//             {/* Auth Buttons */}
//             {forumUser ? (
//               <div className="flex items-center gap-2">
//                 <Logout />
//                 <div className="user-menu flex items-center gap-2 ml-4">
//                   <Avatar
//                     alt={forumUser?.displayName}
//                     src={forumUser?.photoURL || ""}
//                     className="w-10 h-10"
//                   />
//                   <span className="hidden md:inline text-lg font-medium text-gray-700 dark:text-white">
//                     {forumUser?.displayName?.split(" ")[0]}
//                   </span>
//                 </div>
//               </div>
//             ) : (
//               <div>
//                 <a
//                   className="bg-pink-500 text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
//                   onClick={() => document.getElementById("my_modal_5").showModal()}
//                 >
//                   Login
//                 </a>
//                 <Login />
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

import React, { useEffect, useState } from "react";
import Login from "../components/GoogleAuth/Login";
import Logout from "../components/GoogleAuth/Logout";
import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const forumUser = useSelector((state) => state.users.forumUser);
  const [isOthersOpen, setIsOthersOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const location = useLocation();
  const pathname = location.pathname;

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when route changes
  useEffect(() => {
    setIsOthersOpen(false);
    setIsMobileNavOpen(false);
  }, [pathname]);

  // Theme logic
  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  // Auto close dropdown + scroll to top
  const closeOthersDropdownWithDelay = () => {
    setTimeout(() => {
      setIsOthersOpen(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 2000);
  };

  // Auto close mobile nav + scroll to top
  const handleMobileNavClose = () => {
    // Immediately hide the dropdown
    const dropdownMenu = document.querySelector('.menu.menu-sm.dropdown-content');
    if (dropdownMenu) {
      dropdownMenu.style.display = 'none';
    }
    
    // Reset after a short delay
    setTimeout(() => {
      if (dropdownMenu) {
        dropdownMenu.style.display = '';
      }
      setIsMobileNavOpen(false);
      
      // Remove focus from any active element
      if (document.activeElement) {
        document.activeElement.blur();
      }
      
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 200);
  };

  const navLinkClasses = (path) =>
    `relative py-2 px-2 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 
     after:bg-pink-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 
     hover:after:scale-x-100 ${pathname === path
      ? "after:scale-x-100 font-semibold text-pink-600 dark:text-pink-400"
      : ""
    }`;

  const navItems = (
    <>
      <li>
        <Link 
          to="/" 
          className={navLinkClasses("/")} 
          onClick={handleMobileNavClose}
        >
          Home
        </Link>
      </li>
      <li>
        <Link 
          to="/course" 
          className={navLinkClasses("/course")} 
          onClick={handleMobileNavClose}
        >
          Academics
        </Link>
      </li>
      <li>
        <Link 
          to="/buy-sell-home" 
          className={navLinkClasses("/buy-sell-home")} 
          onClick={handleMobileNavClose}
        >
          Buy & Sell
        </Link>
      </li>
      <li>
        <Link 
          to="/disc_forum_homepage" 
          className={navLinkClasses("/disc_forum_homepage")} 
          onClick={handleMobileNavClose}
        >
          Discussion Forum
        </Link>
      </li>
      <li>
        <Link 
          to="/clubs" 
          className={navLinkClasses("/clubs")} 
          onClick={handleMobileNavClose}
        >
          Clubs & Communities
        </Link>
      </li>
      <li className="dropdown dropdown-hover relative group">
        <div>
          <button 
            className={`flex items-center gap-1 py-2 px-3 rounded-md transition-colors duration-200
              ${pathname.startsWith("/sport") || pathname === "/downloads" ? 
                "text-pink-600 dark:text-pink-400 font-semibold" : 
                "hover:text-pink-500 dark:hover:text-pink-400"}`}
            onClick={() => setIsOthersOpen(!isOthersOpen)}
          >
            Others
            <svg 
              className={`w-4 h-4 transition-transform duration-200 ${isOthersOpen ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <ul className={`absolute top-full left-0 mt-1 py-2 bg-white dark:bg-slate-800 shadow-lg rounded-md z-50 w-48 
            transform transition-all duration-200 origin-top
            ${isOthersOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
            <li>
              <Link 
                to="/sport" 
                className={navLinkClasses("/sport")} 
                onClick={() => {
                  closeOthersDropdownWithDelay();
                  handleMobileNavClose();
                }}
              >
                Sports
              </Link>
            </li>
            <li>
              <a
                href="https://www.bitotsav.com"
                target="_blank"
                rel="noreferrer"
                className="block px-2 py-1 hover:bg-gray-200 dark:hover:bg-slate-700 rounded"
                onClick={() => {
                  closeOthersDropdownWithDelay();
                  handleMobileNavClose();
                }}
              >
                Bitotsav
              </a>
            </li>
            <li>
              <Link 
                to="/downloads" 
                className={navLinkClasses("/downloads")} 
                onClick={() => {
                  closeOthersDropdownWithDelay();
                  handleMobileNavClose();
                }}
              >
                Downloads
              </Link>
            </li>
            <li>
              <a
                href="https://ankonrh.github.io/cgpa-calculator/"
                target="_blank"
                rel="noreferrer"
                className="block px-2 py-1 hover:bg-gray-200 dark:hover:bg-slate-700 rounded"
                onClick={() => { 
                  closeOthersDropdownWithDelay(); 
                  handleMobileNavClose(); 
                }}
              >
                CGPA Calculator
              </a>
            </li>
          </ul>
        </div>
      </li>
    </>
  );

  return (
    <div className={`w-full sticky top-0 z-50 bg-white bg-opacity-95 dark:bg-slate-900 dark:text-white ${sticky ? "shadow-md dark:bg-slate-800 transition-all duration-300 ease-in-out" : ""
      }`}
    >
      <div className="max-w-screen-2xl container mx-auto md:px-5">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div 
                tabIndex={0} 
                role="button" 
                className="btn btn-ghost lg:hidden"
                onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className={`menu menu-sm dropdown-content bg-white dark:bg-slate-800 text-black dark:text-white rounded-box z-[1] mt-3 w-52 p-2 shadow ${isMobileNavOpen ? 'block' : ''}`}
                onBlur={() => {
                  setTimeout(() => setIsMobileNavOpen(false), 150);
                }}
              >
                {navItems}
              </ul>
            </div>
            <a href="/" className="text-3xl font-bold cursor-pointer text-pink-500">BiTKiT</a>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-3">{navItems}</ul>
          </div>

          <div className="navbar-end space-x-3">
            {/* Theme Switcher */}
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                className="theme-controller"
                checked={theme === "dark"}
                onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
              />
              <svg
                className="swap-off h-8 w-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
              <svg
                className="swap-on h-8 w-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>

            {/* Auth Buttons */}
            {forumUser ? (
              <div className="flex items-center gap-2">
                <Logout />
                <div className="user-menu flex items-center gap-2 ml-4">
                  <Avatar
                    alt={forumUser?.displayName}
                    src={forumUser?.photoURL || ""}
                    className="w-10 h-10"
                  />
                  <span className="hidden md:inline text-lg font-medium text-gray-700 dark:text-white">
                    {forumUser?.displayName?.split(" ")[0]}
                  </span>
                </div>
              </div>
            ) : (
              <div>
                <a
                  className="bg-pink-500 text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
                  onClick={() => document.getElementById("my_modal_5").showModal()}
                >
                  Login
                </a>
                <Login />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
