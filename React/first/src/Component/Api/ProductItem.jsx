import React from "react";

const ProductItem = (props) => {
  return (
    <div>
      <h4>{props.item.title}</h4>
      <img src={props.item.image} alt="" />
      <p>${props.item.price}</p>
      <p>{props.item.description}</p>
    </div>
  );
};

export default ProductItem;
