import React, { useEffect, useState } from 'react';
// import Product from '../Products/Product';
import './Shop.css'
import Product from './../Products/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handleAddToCart = () =>{
        console.log('clicked');
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product 
                        key={product.id}>
                        product={product}
                        handleAddToCart={handleAddToCart}  
                        </Product>)
                }
            </div>
            <div className="cart-container">
                <h3>Order summary</h3>
            </div>
        </div>
    );
};

export default Shop;