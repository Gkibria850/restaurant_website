import React, { useState } from 'react'
import SectionTitle from '../title/SectionTitle'
import MenuList from './MenuList'
import MenuItem from './MenuItem'
import {menu} from '../../Data'
 const allMenuList =['All',
...new Set(menu.map((menu)=> menu.category))
 ];
const Menu = () => {
  const[menuList, setMenuList] =useState(allMenuList);
  const[menuItems, setMenuItems] =useState(menu);
  return (
    <section className="menu section">
      <div className="container">
        <div className="menu-header">
        <SectionTitle 
        subtitle='Our Menu'
         title={<>What Let's Check <span>Our Menu</span>   
         </>}/>
         <ul className="menu-list">
          <MenuList menuList={menuList}/>
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