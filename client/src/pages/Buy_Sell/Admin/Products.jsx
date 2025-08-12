import { useEffect, useState } from "react";
import { Table, message, Modal } from "antd";
import { useDispatch } from "react-redux";
import { setLoader } from "../../../redux/loadersSlice";
import {
  DeleteProduct,
  EditProduct,
  GetProducts,
  UpdateProductStatus,
} from "../../../apicalls/products";
import moment from "moment";

function Products() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      dispatch(setLoader(true));
      const response = await GetProducts({}); // ✅ safer than null
      dispatch(setLoader(false));
      if (response.success) {
        setProducts(response.data);
      }
    } catch (error) {
      dispatch(setLoader(false));
      message.error(error.message);
    }
  };

  const onStatusUpdate = async (id, status) => {
    try {
      dispatch(setLoader(true));
      const response = await UpdateProductStatus(id, status);
      dispatch(setLoader(false));
      if (response.success) {
        message.success(response.message);
        getData(); // ✅ Refresh after status update
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch(setLoader(false));
      message.error(error.message);
    }
  };

  const confirmDelete = (productId) => {
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
            message.success("Product deleted successfully");
            getData();
          } else {
            throw new Error(response.message);
          }
        } catch (error) {
          dispatch(setLoader(false));
          message.error(error.message);
        }
      },
    });
  };

  const columns = [
    {
      title: "Product",
      dataIndex: "image",
      render: (text, record) => (
        <img
          src={record?.images?.[0]?.url || ""}
          alt="product"
          className="w-20 h-20 object-cover rounded-md"
        />
      ),
    },
    {
      title: "Product",
      dataIndex: "name",
    },
    {
      title: "Seller",
      dataIndex: "name",
      render: (text, record) => record?.seller?.name || "N/A",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Category",
      dataIndex: "category",
      render: (text) => text?.toUpperCase(),
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => text?.toUpperCase(),
    },
    {
      title: "Added On",
      dataIndex: "createdAt",
      render: (text, record) =>
        moment(record?.createdAt).format("DD-MM-YYYY hh:mm A"),
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => {
        const { status, _id } = record;
        return (
          <div className="flex gap-5 items-center">
            {status === "pending" && (
              <>
                <span
                  className="underline cursor-pointer text-green-600"
                  onClick={() => onStatusUpdate(_id, "approved")}
                >
                  Approve
                </span>
                <span
                  className="underline cursor-pointer text-red-500"
                  onClick={() => onStatusUpdate(_id, "rejected")}
                >
                  Reject
                </span>
              </>
            )}
            {status === "approved" && (
              <span
                className="underline cursor-pointer text-red-500"
                onClick={() => onStatusUpdate(_id, "blocked")}
              >
                Block
              </span>
            )}
            {status === "blocked" && (
              <>
                <span
                  className="underline cursor-pointer text-green-600"
                  onClick={() => onStatusUpdate(_id, "approved")}
                >
                  Unblock
                </span>
                <i
                  className="ri-delete-bin-line text-xl text-red-500 cursor-pointer"
                  title="Delete Blocked Product"
                  onClick={() => confirmDelete(_id)}
                ></i>
              </>
            )}
            {status === "rejected" && (
              <i
                className="ri-delete-bin-line text-xl text-red-500 cursor-pointer"
                title="Delete Rejected Product"
                onClick={() => confirmDelete(_id)}
              ></i>
            )}
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full h-[80vh] overflow-auto p-2 md:p-5">
      <Table
        columns={columns}
        dataSource={products}
        rowKey="_id"
        pagination={{ pageSize: 5 }}
        scroll={{ x: true }}
      />
    </div>
  );
}

export default Products;
