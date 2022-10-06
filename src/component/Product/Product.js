import React from 'react';
import './Product.css'

const Product = (props) => {
    const {addToCartHandler, product} = props;
    const {img, name, ratings, shipping, seller, price} = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p>Shipping price: ${shipping}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Rating: {ratings} stars</small></p>
            </div>
            <button onClick={()=>addToCartHandler(product)} className='btn-cart'><p>Add to Cart</p></button>
        </div>
    );
};

export default Product;