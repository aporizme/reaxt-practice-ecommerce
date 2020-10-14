import { Button } from '@material-ui/core'
import React from 'react'
import './Product.css'
function Product({ title, price, image, rating }) {
    return (
        <div className="product">
             
            <div className="product_info">
                <p>{title}</p>
                <div className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </div>
                <div className="product_rating">
                    {Array(rating).fill().map((_,i) => (
                        <p>⭐</p>
                    ))}
                </div>
            </div>
            <img src = {image}/>
            <button>Add to Basket</button>   
        </div>
    )
}

export default Product
