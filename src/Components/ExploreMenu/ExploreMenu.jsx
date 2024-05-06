import React from 'react';
import "./ExploreMenu.css";
import { menu_list } from '../../assets/Food/food.assets';

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'> <h1>Explore Our Menu</h1>  
    <p className='explore-text'>
    Choose your Favourite food from the diverses of healty and tasty items from the menu
    </p>
    <div className="explore-list">
        {menu_list.map((item,index)=>{
            return(
                <div onClick ={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key= {index} className="explore-menu-list-item">
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
    </div>
    <hr/>
    </div>
  )
}

export default ExploreMenu