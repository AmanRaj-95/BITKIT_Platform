import React from "react";
import { useSelector } from "react-redux";
import Spinner from "./Spinner";

function Loader() {
  const loading = useSelector((state) => state.loaders?.loading);

  return loading ? <Spinner /> : null;
}

export default Loader;
