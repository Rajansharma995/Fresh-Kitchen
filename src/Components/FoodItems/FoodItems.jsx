import React, { useState } from 'react';
import "./FoodItems.css";
import {foodAssets} from "../../assets/Food/food.assets";

const FoodItems = ({id,name,price,description,image}) => {

  const [itemCount, setItemCount] = useState(0)
  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt={name} />
        {!itemCount ? <img className='add' onClick={()=>setItemCount(prev=>prev+1)} src={foodAssets.add_icon_white} alt=''/>
        :<div className='food-item-counter'>
          <img onClick={()=>setItemCount(prev=>prev-1)} src={foodAssets.remove_icon_red} alt="" />
          <p>{itemCount}</p>
          <img onClick={()=>setItemCount(prev=>prev+1)}  src={foodAssets.add_icon_green} alt="" />
        </div>

        }
      </div>
        <div className="food-item-info">
          <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={foodAssets.rating_starts} alt="" />
          </div>
          <p className='food-item-desc'>{description}</p>
          <p className='food-item-price'>${price}</p>
        </div>
    </div>  
  )
}

export default FoodItems