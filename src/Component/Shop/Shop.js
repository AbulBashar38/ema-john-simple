import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import "./Shop.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
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
        return true;
      });
    } else {
      ClickedProduct["quantity"] = 1;
      setCart([ClickedProduct]);
    }
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
      <div className="cart-container">
        {
          <Cart cartData={cart}>
            <Link to="/review">
              <Button variant="success">Review your order</Button>
            </Link>
          </Cart>
        }
      </div>
    </div>
  );
};

export default Shop;
