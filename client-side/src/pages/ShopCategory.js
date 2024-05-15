import React, { useContext } from 'react'
import "./ShopCategory.css"
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../assests/dropdown_icon.png'
import {Item}  from '../Components/Item/Item';
import { ProductHeader } from '../Components/ProductHeader/ProductHeader';

 const ShopCatagory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div>
      <ProductHeader/>
      <div className='shop-category'>
      
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 product
        </p>
        <div className="shopcategory-sort">
          sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          if(props.category === item.category){
            return(<Item 
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            hoverImage={item.hoverImage}
            price={item.price}
           
          />
        );
          }else {
            return null;
          }
        }
      )
    }
      </div>
    </div>
    </div>
    
  )
}
export default ShopCatagory
