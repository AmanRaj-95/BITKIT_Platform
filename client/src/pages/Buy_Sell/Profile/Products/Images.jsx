import React, { useState } from "react";
import { Upload, Button, message } from "antd";
import { useDispatch } from "react-redux";
import { setLoader } from "../../../../redux/loadersSlice";
import {
  EditProduct,
  UploadProductImage,
  DeleteProductImage,
} from "../../../../apicalls/products";

function Images({ selectedProduct, setShowProductForm, getData }) {
  const [showPreview = false, setShowPreview] = useState(true);
  const [images = [], setImages] = useState(selectedProduct.images);
  const [file = null, setFile] = useState(null);
  const dispatch = useDispatch();

  const upload = async () => {
    try {
      if (!file) {
        message.error("Please select an image to upload");
        return;
      }

      dispatch(setLoader(true));
      // Upload image to cloudinary
      const formData = new FormData();
      formData.append("file", file);
      formData.append("productId", selectedProduct._id);
      const response = await UploadProductImage(formData);
      dispatch(setLoader(false));
      if (response.success) {
        message.success(response.message);
        setImages([...images, response.data]);
        setShowPreview(false);
        setFile(null);
        getData();
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(setLoader(false));
      message.error(error.message);
    }
  };

  const deleteImage = async (image) => {
    try {
      dispatch(setLoader(true));

      const response = await DeleteProductImage({
        productId: selectedProduct._id,
        public_id: image.public_id,
      });

      dispatch(setLoader(false));

      if (response.success) {
        const updatedImagesArray = images.filter(
          (img) => img.public_id !== image.public_id
        );
        setImages(updatedImagesArray);
        setFile(null);
        getData();
        message.success(response.message);
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(setLoader(false));
      message.error(error.message);
    }
  };

  return (
    <div>
      <div className="flex gap-5 mb-5">
        {images.map((image) => {
          return (
            <div className="flex gap-2 border border-solid border-gray-500 rounded p-1 items-end">
              <img className="h-20 w-20 object-cover" src={image.url} alt="" />

              <i
                className="ri-delete-bin-line text-red-500"
                onClick={() => deleteImage(image)}
              ></i>
            </div>
          );
        })}
      </div>
      <Upload
        listType="picture"
        beforeUpload={() => false}
        onChange={({ fileList }) => {
          if (fileList.length + images.length > 3) {
            message.warning("You can upload a maximum of 3 images.");
            return;
          }

          const latestFile = fileList[fileList.length - 1]?.originFileObj;

          setFile(latestFile || null);
          setShowPreview(fileList.length > 0);
        }}
        fileList={
          file
            ? [
                {
                  uid: file.uid || "-1",
                  name: file.name,
                  originFileObj: file,
                },
              ]
            : []
        }
        showUploadList={showPreview}
        disabled={images.length >= 3}
      >
        <Button type="dashed" disabled={images.length >= 3}>
          Upload Images
        </Button>
      </Upload>

      <div className="flex justify-end gap-5 mt-5">
        <Button
          type="default"
          onClick={() => {
            setShowProductForm(false);
          }}
        >
          Cancel
        </Button>

        <Button type="primary" onClick={upload} disabled={!file}>
          Upload
        </Button>
      </div>
    </div>
  );
}

export default Images;
