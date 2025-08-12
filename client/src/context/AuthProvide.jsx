// import React, { useContext, useState, useEffect, createContext } from 'react';

// export const AuthContext = createContext();

// function AuthProvide({ children }) {
//   const [authUser, setAuthUser] = useState(undefined);

//   // Load from localStorage on first mount
//   useEffect(() => {
//     const storedUser = localStorage.getItem("Users");
//     if (storedUser) {
//       setAuthUser(JSON.parse(storedUser));
//     } else {
//       setAuthUser(null); // explicitly set null if not logged in
//     }
//   }, []);

//   // Save to localStorage whenever authUser changes
//   useEffect(() => {
//     if (authUser) {
//       localStorage.setItem("Users", JSON.stringify(authUser));
//     } else {
//       localStorage.removeItem("Users");
//     }
//   }, [authUser]);

//   return (
//     <AuthContext.Provider value={[authUser, setAuthUser]}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export const useAuth = () => useContext(AuthContext);

// export default AuthProvide;
