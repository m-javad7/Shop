import React, { useContext } from "react";
import { PRODUCTS } from "../../data/produts";
import { ShopContext } from "../../context/shopContext";
import { Product } from "../shop/product";

export const Cart =() => {
    const {cartItems , resetCart} = useContext(ShopContext)
    return(
        <>
        <div className="container">
        <h1>Your cart items</h1>
        <div className="row justify-content-center">
            {PRODUCTS.map((p)=>{
                if( cartItems?.some((i)=> i.id===p.id && i.count >0))
                 return <Product data={p} ></Product>
            })}
        </div>
        <button className="btn btn-warning m-3" onClick={resetCart}>reset</button>
        </div>
        </>
    )
    }