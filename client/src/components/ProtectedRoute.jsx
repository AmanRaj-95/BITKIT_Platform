// // src/components/ProtectedRoute.jsx
// import React, { useEffect, useState } from 'react';
// import { Outlet } from 'react-router-dom';
// import { useAuth } from '../context/AuthProvide';
// import LoginReqPopUp from './LoginReqPopUp';

// const ProtectedRoute = () => {
//   const [authUser] = useAuth();
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     if (!authUser) {
//       setShowModal(true);
//     }
//   }, [authUser]);

//   if (!authUser && !showModal) return null;

//   return (
//     <>
//       {!authUser && <LoginReqPopUp show={showModal} />}
//       {authUser && <Outlet />}
//     </>
//   );
// };

// export default ProtectedRoute;
// src/components/ProtectedRoute.jsx
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginReqPopUp from './LoginReqPopUp';

const ProtectedRoute = () => {
  const forumUser = useSelector((state) => state.users.forumUser);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!forumUser) {
      setShowModal(true);
    }
  }, [forumUser]);

  if (!forumUser && !showModal) return null;

  return (
    <>
      {!forumUser && <LoginReqPopUp show={showModal} />}
      {forumUser && <Outlet />}
    </>
  );
};

export default ProtectedRoute;
