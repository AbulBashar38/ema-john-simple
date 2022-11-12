import React from 'react';
import './Product.css'
const Product = ({product,handleAddToCart}) => {
    const {name,seller,price,ratings,img}=product
    return (
        <div className='product'>
            <img src={img} alt=""/>
            <div className="product-info">
                <h4>{name}</h4>
                <h5>Price: ${price}</h5>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Rating: {ratings}</small></p>
            </div>
            <button className='btn-cart' onClick={()=>handleAddToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default Product;