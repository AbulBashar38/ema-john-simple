import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleAddToCart = (ClickedProduct) => {
    if (cart.length > 0) {
      cart.find((cartProduct) => {
        if (cartProduct.id === ClickedProduct.id) {
          const updateQuantity = ++cartProduct.quantity;
          ClickedProduct["quantity"] = updateQuantity;
          const notSameProduct = cart.filter(
            (product) => product.id !== ClickedProduct.id
          );
          setCart([...notSameProduct, ClickedProduct]);
        } else {
          ClickedProduct["quantity"] = 1;
          const newCart = [...cart, ClickedProduct];
          setCart(newCart);
        }
      });
    } else {
      ClickedProduct["quantity"] = 1;
      setCart([ClickedProduct]);
    }
    console.log(cart);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container"></div>
    </div>
  );
};

export default Shop;
