import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import "./Productitem.css";
import axios from "axios";

const ProductList = () => {
  const [data, setData] = useState([]);
  //async make program to async the program till the program gate the data
  const getproducts = async () => {
    const result = await axios.get("https://fakestoreapi.com/products"); //await make application wait
    setData(result.data);
  };

  //CURD
  //create Update Read Delete
  useEffect(() => {
    getproducts();
  }, []);

  return (
    <div className="Prodlist">
      {data.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ProductList;
