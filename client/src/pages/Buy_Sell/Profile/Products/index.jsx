// import React, { useEffect, useState } from "react";
// import { Button, Table } from "antd";
// import ProductsForm from "./ProductsForm";
// import { useDispatch, useSelector } from "react-redux";
// import { setLoader } from "../../../../redux/loadersSlice";
// import { DeleteProduct, GetProducts } from "../../../../apicalls/products";
// import { message } from "antd";
// import moment from "moment";
// import Bids from "./Bids";

// function Products() {
//   const [showBids, setShowBids] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [products, setProducts] = useState([]);
//   const [showProductForm, setShowProductForm] = useState(false);

//   const { user } = useSelector((state) => state.users);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (user?._id) {
//       getData();
//     }
//   }, [user]);

//   if (!user?._id) return null;

//   const getData = async () => {
//     try {
//       dispatch(setLoader(true));
//       const response = await GetProducts({ seller: user._id });
//       dispatch(setLoader(false));
//       if (response.success) {
//         console.log("Fetched products:", response.data);
//         setProducts(response.data);
//       }
//     } catch (error) {
//       dispatch(setLoader(false));
//       message.error(error.message);
//     }
//   };

//   const deleteProduct = async (id) => {
//     try {
//       dispatch(setLoader(true));
//       const response = await DeleteProduct(id);
//       dispatch(setLoader(false));
//       if (response.success) {
//         message.success(response.message);
//         getData();
//       } else {
//         message.error(response.message);
//       }
//     } catch (error) {
//       dispatch(setLoader(false));
//       message.error(error.message);
//     }
//   };

//   const columns = [
//     {
//       title: "Product",
//       dataIndex: "image",
//       width: 100,
//       render: (text, record) => (
//         <img
//           src={record?.images?.length > 0 ? record.images[0] : ""}
//           alt=""
//           className="w-20 h-20 object-cover rounded-md"
//         />
//       ),
//     },
//     {
//       title: "Name",
//       dataIndex: "name",
//       width: 150,
//     },
//     {
//       title: "Price",
//       dataIndex: "price",
//       width: 100,
//     },
//     {
//       title: "Category",
//       dataIndex: "category",
//       width: 120,
//     },
//     {
//       title: "Age",
//       dataIndex: "age",
//       width: 80,
//     },
//     {
//       title: "Status",
//       dataIndex: "status",
//       width: 100,
//     },
//     {
//       title: "Added On",
//       dataIndex: "createdAt",
//       width: 180,
//       render: (text, record) =>
//         moment(record.createdAt).format("DD-MM-YYYY hh:mm A"),
//     },
//     {
//       title: "Action",
//       dataIndex: "action",
//       width: 180,
//       render: (text, record) => (
//         <div className="flex gap-3 items-center">
//           <span
//             className="underline cursor-pointer"
//             onClick={() => {
//               setSelectedProduct(record);
//               setShowBids(true);
//             }}
//           >
//             Show Bids
//           </span>
//           <i
//             className="ri-pencil-line cursor-pointer"
//             onClick={() => {
//               setSelectedProduct(record);
//               setShowProductForm(true);
//             }}
//           ></i>
//           <i
//             className="ri-delete-bin-line text-red-600 cursor-pointer"
//             onClick={() => deleteProduct(record._id)}
//           ></i>
//         </div>
//       ),
//     },
//   ];

//   return (
//     <div className="px-2 sm:px-5">
//       <div className="flex justify-end mb-4">
//         <Button
//           type="default"
//           className="h-10 text-white bg-blue-500 hover:bg-blue-600 transition shadow-md"
//           onClick={() => {
//             setSelectedProduct(null);
//             setShowProductForm(true);
//           }}
//         >
//           Add Product
//         </Button>
//       </div>

//       <div className="w-full overflow-auto">
//         <Table
//           rowKey="_id"
//           columns={columns}
//           dataSource={products}
//           scroll={{ x: 1200 }}
//           pagination={{ pageSize: 5 }}
//         />
//       </div>

//       {showProductForm && (
//         <ProductsForm
//           showProductForm={showProductForm}
//           setShowProductForm={setShowProductForm}
//           selectedProduct={selectedProduct}
//           getData={getData}
//         />
//       )}

//       {showBids && (
//         <Bids
//           showBidsModal={showBids}
//           setShowBidsModal={setShowBids}
//           selectedProduct={selectedProduct}
//         />
//       )}
//     </div>
//   );
// }

// export default Products;
import React, { useEffect, useState } from "react";
import { Button, Table, message, Modal } from "antd"; // ← already imported message

import ProductsForm from "./ProductsForm";
import { useDispatch, useSelector } from "react-redux";
import { setLoader } from "../../../../redux/loadersSlice";
import { DeleteProduct, GetProducts } from "../../../../apicalls/products";
import moment from "moment";
import Bids from "./Bids";

function Products() {
  const [showBids, setShowBids] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [showProductForm, setShowProductForm] = useState(false);

  const dispatch = useDispatch();
  const { buySellUser } = useSelector((state) => state.users); // ✅ updated

  useEffect(() => {
    if (buySellUser?._id) {
      getData();
    }
  }, [buySellUser]);

  if (!buySellUser?._id) return null;

  const getData = async () => {
    try {
      dispatch(setLoader(true));
      const response = await GetProducts({ seller: buySellUser._id });
      dispatch(setLoader(false));
      if (response.success) {
        console.log("Fetched products:", response.data);
        setProducts(response.data);
      }
    } catch (error) {
      dispatch(setLoader(false));
      message.error(error.message);
    }
  };

  const columns = [
    {
      title: "Product",
      dataIndex: "image",
      width: 100,
      render: (text, record) => (
        <img
          src={record?.images?.[0]?.url || ""}
          alt=""
          className="w-20 h-20 object-cover rounded-md"
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      width: 150,
    },
    {
      title: "Price",
      dataIndex: "price",
      width: 100,
    },
    {
      title: "Category",
      dataIndex: "category",
      render: (text) => text?.toUpperCase(),
      width: 120,
    },
    {
      title: "Age",
      dataIndex: "age",
      width: 80,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => text?.toUpperCase(),
      width: 100,
    },
    {
      title: "Added On",
      dataIndex: "createdAt",
      width: 180,
      render: (text, record) =>
        moment(record.createdAt).format("DD-MM-YYYY hh:mm A"),
    },
    {
      title: "Action",
      dataIndex: "action",
      width: 180,
      render: (text, record) => (
        <div className="flex gap-5 items-center">
          <span
            className="underline cursor-pointer text-blue-500 font-semibold"
            onClick={() => {
              setSelectedProduct(record);
              setShowBids(true);
            }}
          >
            Show Bids
          </span>
          <i
            className="ri-pencil-line cursor-pointer text-xl"
            onClick={() => {
              setSelectedProduct(record);
              setShowProductForm(true);
            }}
          ></i>
          <i
            className="ri-delete-bin-line text-red-600 cursor-pointer text-xl"
            onClick={() => showDeleteConfirm(record._id)}
          ></i>
        </div>
      ),
    },
  ];

  const showDeleteConfirm = (productId) => {
    Modal.confirm({
      title: "Are you sure you want to delete this product?",
      okText: "Yes, Delete",
      okType: "danger",
      cancelText: "Cancel",
      onOk: async () => {
        try {
          dispatch(setLoader(true));
          const response = await DeleteProduct(productId);
          dispatch(setLoader(false));
          if (response.success) {
            message.success(response.message);
            getData();
          } else {
            message.error(response.message);
          }
        } catch (error) {
          dispatch(setLoader(false));
          message.error(error.message);
        }
      },
    });
  };

  return (
    <div className="px-2 sm:px-5">
      <div className="flex justify-end mb-4">
        <Button
          type="default"
          className="h-10 text-white bg-blue-500 hover:bg-blue-600 transition shadow-md"
          onClick={() => {
            setSelectedProduct(null);
            setShowProductForm(true);
          }}
        >
          Add Product
        </Button>
      </div>

      <div className="w-full overflow-auto">
        <Table
          rowKey="_id"
          columns={columns}
          dataSource={products}
          scroll={{ x: 1200 }}
          pagination={{ pageSize: 5 }}
        />
      </div>

      {showProductForm && (
        <ProductsForm
          showProductForm={showProductForm}
          setShowProductForm={setShowProductForm}
          selectedProduct={selectedProduct}
          getData={getData}
        />
      )}

      {showBids && (
        <Bids
          showBidsModal={showBids}
          setShowBidsModal={setShowBids}
          selectedProduct={selectedProduct}
        />
      )}
    </div>
  );
}

export default Products;
