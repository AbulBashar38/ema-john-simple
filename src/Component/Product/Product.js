import React from 'react';
import './Product.css'
const Product = (props) => {
    const {name,seller,price,ratings,img}=props.product
    return (
        <div className='product'>
            <img src={img} alt=""/>
            <div className="product-info">
                <h4>{name}</h4>
                <h5>Price: ${price}</h5>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Rating: {ratings}</small></p>
            </div>
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;