import { PRODUCTS } from "../../data/produts";
import { Product } from "./product";

export const Shop = () => {
  return (
    <>
      <h1>shop</h1>
      <div className="row">
        {PRODUCTS.map((productData) => {
          return <Product key={productData.id} data={productData} />;
        })}
      </div>
    </>
  );
};
