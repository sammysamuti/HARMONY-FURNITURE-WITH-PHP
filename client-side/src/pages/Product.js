import React from 'react'
import "./Product.css"
import { useContext } from 'react'

import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';

 const Product = () => {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId) )
  return (
    <div>
     
      <ProductDisplay product = {product}/>
    </div>
  )
}
export default Product;