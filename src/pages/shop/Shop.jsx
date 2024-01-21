import React from "react";
import {Product} from "./product";
import { PRODUCTS } from "../../data/produts";
export const Shop = () => {
  return (
    <>
      <h1>Shop</h1>
      <div className="row">
        {PRODUCTS.map((productData) => (
          <Product key={productData.id} data={productData} />
        ))}
      </div>
    </>
  );
};
 