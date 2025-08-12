import React from "react";
import { Tabs } from "antd";
import Products from "./Products";
import UserBids from "./UserBids";
import { useSelector } from "react-redux";
import moment from "moment";

function Profile() {
  const { buySellUser } = useSelector((state) => state.users);

  return (
    <div className="m-3">
      <Tabs
        defaultActiveKey="1"
        className="custom-tabs dark:text-white"
        tabBarGutter={30}
      >
        <Tabs.TabPane tab={<span className="dark:text-white">My Products</span>} key="1">
          <Products />
        </Tabs.TabPane>
        <Tabs.TabPane tab={<span className="dark:text-white">My Bids</span>} key="2">
          <UserBids />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default Profile;

// import React from "react";
// import { Tabs } from "antd";
// import Products from "./Products";
// import UserBids from "./UserBids";
// import { useSelector } from "react-redux";
// import moment from "moment";

// function Profile() {
//   const { buySellUser } = useSelector((state) => state.users); // ✅ updated

//   return (
//     <div className="m-3">
//       <Tabs
//         defaultActiveKey="1"
//         className="custom-tabs dark:text-white"
//         tabBarGutter={30}
//       >
//         <Tabs.TabPane tab={<span className="dark:text-white">Products</span>} key="1">
//           <Products />
//         </Tabs.TabPane>
//         <Tabs.TabPane tab={<span className="dark:text-white">My Bids</span>} key="2">
//           <UserBids />
//         </Tabs.TabPane>
//         <Tabs.TabPane tab={<span className="dark:text-white">General</span>} key="3">
//           <div className="flex flex-col w-full md:w-1/2 lg:w-1/3 gap-4 p-4 bg-white dark:bg-slate-800 rounded-md shadow-md">
//             <span className="font-semibold flex justify-between">
//               Name: <span className="text-gray-500">{buySellUser?.name}</span>
//             </span>
//             <span className="font-semibold flex justify-between">
//               Email: <span className="text-gray-500">{buySellUser?.email}</span>
//             </span>
//             <span className="font-semibold flex justify-between">
//               Created On:{" "}
//               <span className="text-gray-500">
//                 {moment(buySellUser?.createdAt).format("MMMM D, YYYY")}
//               </span>
//             </span>
//           </div>
//         </Tabs.TabPane>
//       </Tabs>
//     </div>
//   );
// }

// export default Profile;
