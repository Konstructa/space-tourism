import React from 'react'
import { NavLink } from "react-router-dom";

interface MenuLinkProps {
  changeBackgroundImage: (image: string) => {}
  title: string
}

export const MenuLink = ({ changeBackgroundImage, title}: MenuLinkProps ) => {
  return (
    <NavLink 
        to = '/' 
        style={({ isActive }) => 
        ({ borderBottom: isActive ? '2px solid rgba(255, 255, 255)' : ""})}
        className="header-nav"
        onClick={() => changeBackgroundImage(title)}
        >
            <p>{title}</p>
    </NavLink>
)
}
