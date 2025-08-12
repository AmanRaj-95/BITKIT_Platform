import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { message, Badge, Avatar, Button } from "antd";
import { GetProducts } from "../../../apicalls/products";
import { setLoader } from "../../../redux/loadersSlice";
import Divider from "../../../components/Divider";
import Filters from "./Filters";
import ProductsForm from "../Profile/Products/ProductsForm";

function Home() {
  const [notifications, setNotifications] = useState([]);
  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showProductForm, setShowProductForm] = useState(false);
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);

  const [filters, setFilters] = useState({
    status: "approved",
    category: [],
  });

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  // ✅ Use buySellUser from Redux
  const { buySellUser: user } = useSelector((state) => state.users);
  console.log("BuySellUser in Home:", user);

  const getData = async () => {
    try {
      setInitialLoadComplete(false);
      dispatch(setLoader(true));
      const response = await GetProducts(filters);
      dispatch(setLoader(false));
      if (response.success) {
        setProducts(response.data);
      }
      setInitialLoadComplete(true);
    } catch (error) {
      dispatch(setLoader(false));
      message.error(error.message);
      setInitialLoadComplete(true);
    }
  };

  const fetchProducts = async () => {
    try {
      setInitialLoadComplete(false);
      dispatch(setLoader(true));
      const response = await GetProducts({ ...filters, search });
      dispatch(setLoader(false));
      if (response.success) {
        setProducts(response.data);
      }
      setInitialLoadComplete(true);
    } catch (error) {
      dispatch(setLoader(false));
      message.error(error.message);
      setInitialLoadComplete(true);
    }
  };

  const handleUserNavigation = () => {
    if (!user) return;
    if (user.role === "admin") {
      navigate("/admin");
    } else {
      navigate("/profile");
    }
  };

  useEffect(() => {
    getData();
  }, [filters]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const refresh = params.get("refresh");
    if (refresh) {
      setSearch("");
      setFilters({
        status: "approved",
        category: [],
      });
      getData();
    }
  }, [location.search]);

  return (
    <div className="flex flex-col gap-5 p-4">
      {user && (
        <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center justify-between gap-5 md:order-2">
            <div>
              <Button
                type="default"
                className="h-10 text-white bg-blue-500 transition shadow-md"
                onClick={() => {
                  setSelectedProduct(null);
                  setShowProductForm(true);
                }}
              >
                Add Product
              </Button>
            </div>

            <div
              onClick={handleUserNavigation}
              className="bg-white dark:bg-slate-800 px-3 border border-blue-500 rounded flex gap-1 items-center resposive-div h-10"
            >
              <i
                className="ri-user-fill cursor-pointer text-xl text-black dark:text-white"
                onClick={handleUserNavigation}
              />
              <span
                className="cursor-pointer md:inline font-semibold text-black dark:text-white"
                onClick={handleUserNavigation}
              >
                {"Profile"}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1 w-full md:order-1">
            {!showFilters && (
              <i
                className="ri-equalizer-fill text-2xl cursor-pointer text-gray-700 dark:text-gray-200"
                onClick={() => setShowFilters(true)}
              ></i>
            )}

            <div className="flex items-center gap-2 flex-grow px-3">
              <input
                type="text"
                placeholder="Search products here..."
                className="flex-grow outline-none rounded-md px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 shadow-sm"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") fetchProducts();
                }}
              />

              {search && (
                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    getData();
                  }}
                  className="text-gray-400 dark:text-gray-300 hover:text-black dark:hover:text-white"
                  title="Clear"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
              )}

              <button
                type="button"
                onClick={fetchProducts}
                className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                title="Search"
              >
                <i className="ri-search-line text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-5">
        {showFilters && (
          <div className="w-full lg:w-72">
            <Filters
              showFilters={showFilters}
              setShowFilters={setShowFilters}
              filters={filters}
              setFilters={setFilters}
            />
          </div>
        )}

        <div className="w-full grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {initialLoadComplete && products?.length === 0 ? (
            <div className="col-span-full flex flex-col justify-center items-center py-10 px-4 text-center">
              {search.trim() !== "" || filters.category.length > 0 ? (
                <>
                  <h1 className="text-xl sm:text-2xl text-gray-500 dark:text-gray-300 font-semibold mb-2">
                    No products found for your search.
                  </h1>
                </>
              ) : (
                <>
                  <h1 className="text-xl sm:text-2xl text-gray-500 dark:text-gray-300 font-semibold mb-2">
                    No products added yet.
                  </h1>
                  <h2 className="text-2xl sm:text-2xl font-semibold text-blue-500 dark:text-blue-400">
                    Be the first one to add a product!
                  </h2>
                </>
              )}
            </div>
          ) : (
            products.map((product) => (
              <div
                className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-800 rounded flex flex-col gap-3 pb-2 cursor-pointer hover:shadow-lg hover:shadow-gray-300 dark:hover:shadow-gray-700 transition"
                key={product._id}
                onClick={() => navigate(`/product/${product._id}`)}
              >
                <img
                  className="w-full h-64 p-2 rounded-md object-cover"
                   src={product.images[0]?.url || ""}
                  alt="product"
                />

                <div className="px-2 flex flex-col">
                  <h1 className="text-lg font-semibold dark:text-white">
                    {product.name}
                  </h1>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {product.age} {product.age === 1 ? "year" : "years"} old
                  </p>
                  <Divider />
                  <span className="text-xl font-semibold text-green-700 dark:text-green-500">
                    ₹{product.price}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {showProductForm && (
        <ProductsForm
          showProductForm={showProductForm}
          setShowProductForm={setShowProductForm}
          selectedProduct={selectedProduct}
          getData={getData}
        />
      )}
    </div>
  );
}

export default Home;
