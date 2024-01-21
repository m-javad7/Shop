import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";

export const Product = (props) => {
  const { id, productName, productImage, price } = props.data;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  const isInCart = cartItems?.some((item) => item.id === id);
  return (
    <div className="col-8 col-md-5 col-lg-3 border shadow p-3 m-2 bg-white rounded">
      <img src={productImage} alt={productName} className="w-100" />
      <h5> {productName}</h5>
      <p>price : {price}$</p>
      <button className="btn btn-info btn-sm" onClick={() => addToCart(id)}>
        +
      </button>
      <span className="mx-1">
        {cartItems?.filter((row) => row.id === id)[0]?.count}
      </span>
      {isInCart && (
        <button
          className="btn btn-info btn-sm"
          onClick={() => removeFromCart(id)}
        >
          -
        </button>
      )}
    </div>
  );
};