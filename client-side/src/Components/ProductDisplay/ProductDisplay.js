import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from'../../assests/star_icon.png'
import star_dull_icon from '../../assests/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'


export const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart}= useContext(ShopContext);
  return (
    <div className='product-display'>
        <div className="product-display-left">
           
            <div className="product-display-img">
                <img className ='product-display-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="product-display-right">
            <h1>{product.name}</h1>
            <div className="product-display-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(131)</p>

            </div>
            <div className="productdisplay-right-prices"> ${product.price} </div>
                <div className="productdisplay-description">
        This Furmiture is a modern and comfortable option crafted from high-quality Material. 
    It features great Feature for optimal comfort and support. Its sleek design complements a
    variety of decor styles, making it suitable for any space.
                </div>

                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                    <div className="productdisplay-right-category">
                        <p><span>Category: </span>Household, livingroom, sofa. </p>             
                        </div>
                
        </div>
    </div>
  )
}