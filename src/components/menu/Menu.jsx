import React, { useState } from 'react'
import SectionTitle from '../title/SectionTitle'
import MenuList from './MenuList'
import MenuItem from './MenuItem'
import {menu} from '../../Data'
import './menu.css'


 const allMenuList =['All',
...new Set(menu.map((menu)=> menu.category))
 ];
const Menu = () => {
  const[menuList, setMenuList] =useState(allMenuList);
  const[menuItems, setMenuItems] =useState(menu);

//filter menu
  const filterItems = (category) =>{
    if(category === 'All'){
      setMenuItems(menu);
      return;
    }
    const newMenuItems = menu.filter((item) =>item.category === category);
    setMenuItems(newMenuItems);
  };
  return (
    <section className="menu section">
      <div className="container">
        <div className="menu-header">
        <SectionTitle 
        subtitle='Our Menu'
         title={<>What Let's Check <span>Our Menu</span>   
         </>}/>
         <ul className="menu-list">
          <MenuList menuList={menuList} filterItems={filterItems}/>
         </ul>
        </div>
        <div className="menu-container grid">
          <MenuItem menuItems={menuItems}/>
        </div>
      </div>
    </section>
  )
}

export default Menu