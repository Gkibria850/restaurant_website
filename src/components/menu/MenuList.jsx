import React from 'react'

const MenuList = ({menuList}) => {
  return (
    <>
    {
        menuList.map((category,index)=>{
           return(
            <li className="menu-list-item" key={index}>
                {category}
            </li>
           ) 
        })
    }
    </>
  )
}

export default MenuList