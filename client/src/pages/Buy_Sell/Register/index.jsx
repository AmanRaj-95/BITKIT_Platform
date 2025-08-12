// import React from "react";
// import { Form, Input, Button, message } from "antd";
// import { Link, useNavigate } from "react-router-dom";
// import Divider from "../../../components/Divider";
// import { RegisterUser } from "../../../apicalls/users";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { setLoader } from "../../../redux/loadersSlice";
// import { jwtDecode } from "jwt-decode";


// const rules = [
//   {
//     required: true,
//     message: "required",
//   },
// ];

// function Register() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const onFinish = async (values) => {
//     try {
//       dispatch(setLoader(true));
//       const response = await RegisterUser(values);
//       dispatch(setLoader(false));
//       if (response.success) {
//         localStorage.setItem("token", response.data); 
//         message.success(response.message);
//         window.location.href = "/"; 
//       } else {
//         throw new Error(response.message);
//       }
//     } catch (error) {
//       dispatch(setLoader(false));
//       message.error(error.message);
//     }
//   };

//    useEffect(() => {
//     const token = localStorage.getItem("token");

//     if (token) {
//       try {
//         const decoded = jwtDecode(token);
//         const isExpired = decoded.exp * 1000 < Date.now();

//         if (!isExpired) {
//           navigate("/");
//         } else {
//           localStorage.removeItem("token");
//         }
//       } catch (err) {
//         localStorage.removeItem("token");
//       }
//     }
//   }, []);
  
//   return (
//     <div className="h-screen bg-blue-500 flex justify-center items-center form-container">
//       <div className="bg-white p-5 rounded w-[450px]">
//         <h1 className="text-center">
//           <span className="text-gray-400 text-2xl font-semibold">Register</span>
//         </h1>
//         <Divider />
//         <Form layout="vertical" onFinish={onFinish}>
//           <Form.Item label="Name" name="name" rules={rules}>
//             <Input placeholder="Name" />
//           </Form.Item>
//           <Form.Item label="Email" name="email" rules={rules}>
//             <Input placeholder="Email" />
//           </Form.Item>
//           <Form.Item label="Password" name="password" rules={rules}>
//             <Input type="password" placeholder="Passowrd" />
//           </Form.Item>
//           <Button type="primary" htmlType="submit" block className="mt-2">
//             {" "}
//             Register
//           </Button>
//           <div className="mt-5 text-center">
//             <span className="text-gray-500">
//               Already have an account?{" "}
//               <Link to="/login" className="text-blue-500">
//                 Login
//               </Link>
//             </span>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// }

// export default Register;
