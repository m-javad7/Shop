import React from "react";
import {Product} from "./product";
import { PRODUCTS } from "../../data/produts";
export const Shop = () => {
  return (
    <>
    <div className="container">
    <h1>Shop</h1>
      <div className="row justify-content-center">
        {PRODUCTS.map((productData) => (
          <Product key={productData.id} data={productData} />
        ))}
      </div>
    </div>
    </>
  );
};
 