// import React, { useEffect } from "react";
// import { Tabs } from "antd";
// import Products from "./Products";
// import Users from "./Users";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// function Admin() {
//   const navigate = useNavigate();
//   // const { user } = useSelector((state) => state.users);
//   const usersState = useSelector((state) => state.users); // get the whole users slice
//   const { user } = usersState;
//   useEffect(() => {
//      if (!user) {
//     console.log("User not found");
//     return;
//   }
//   else console.log("User found:", user);
//     // if (user.role !== "admin") {
//     //   navigate("/");
//     // }
//   }, [user,usersState]);

//   return (
//     <div className="m-3">
//       <Tabs>
//         <Tabs.TabPane tab="Products" key="1">
//           <Products />
//         </Tabs.TabPane>
//         <Tabs.TabPane tab="Users" key="2">
//           <Users />
//         </Tabs.TabPane>
//       </Tabs>
//     </div>
//   );
// }

// export default Admin;
import React, { useEffect } from "react";
import { Tabs } from "antd";
import Products from "./Products";
import Users from "./Users";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();

  // Extract buySellUser from Redux store
  const { buySellUser } = useSelector((state) => state.users);

  useEffect(() => {
    if (!buySellUser) {
      console.log("User not found");
      navigate("/login"); // redirect if not logged in
      return;
    }

    if (buySellUser.role !== "admin") {
      console.log("Access denied: not admin");
      navigate("/");
    } else {
      console.log("Admin access granted:", buySellUser);
    }
  }, [buySellUser]);

  return (
    <div className="m-3">
      <Tabs className="custom-tabs dark:text-white">
        <Tabs.TabPane tab={<span className="dark:text-white">Products</span>} key="1">
          <Products />
        </Tabs.TabPane>
        <Tabs.TabPane tab={<span className="dark:text-white">Users</span>} key="2">
          <Users />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default Admin;
