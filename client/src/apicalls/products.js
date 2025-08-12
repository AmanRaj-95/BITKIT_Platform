// import { axiosInstance } from "./axiosInstance";
import  axiosInstance  from "../utils/axiosInstance";

// add a new product
export const AddProduct = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/buy-sell/products/add-product",
      payload
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

// get all products
export const GetProducts = async (filters) => {
  try {
    const response = await axiosInstance.post(
      "/buy-sell/products/get-products",
      filters || {}
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

// edit a product
export const EditProduct = async (id, payload) => {
  try {
    const response = await axiosInstance.put(
      `/buy-sell/products/edit-product/${id}`,
      payload
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

// get product by id
export const GetProductById = async (id) => {
  try {
    const response = await axiosInstance.get(
      `/buy-sell/products/get-product-by-id/${id}`
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

// delete a product
export const DeleteProduct = async (id) => {
  try {
    const response = await axiosInstance.delete(
      `/buy-sell/products/delete-product/${id}`
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

// upload product image
export const UploadProductImage = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/buy-sell/products/upload-image-to-product",
      payload
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

// update product status
export const UpdateProductStatus = async (id, status) => {
  try {
    const response = await axiosInstance.put(
      `/buy-sell/products/update-product-status/${id}`,
      { status }
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

// place a new bid
export const PlaceNewBid = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/buy-sell/bids/place-new-bid",
      payload
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

// get all bids
export const GetAllBids = async (filters) => {
  try {     
    const response = await axiosInstance.post(
      "/buy-sell/bids/get-all-bids",
      filters || {}
    );
    return response.data;
  } catch (error) {
    return error.message;
  } 
};


// delete product image
export const DeleteProductImage = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/buy-sell/products/delete-product-image",
      payload
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

