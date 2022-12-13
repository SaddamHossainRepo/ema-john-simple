import React from 'react';
import './Product.css';
import '../Shop/Shop'

const Product = (props) => { 
    // console.log(props.children[1]);
    const {name, img, seller, price, ratings} = props.children[1];
    // const {handleAddToCart} = props;  

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} star</small></p>
            </div>
            <button onClick={props.handleAddToCart}  className='btn-cart'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;