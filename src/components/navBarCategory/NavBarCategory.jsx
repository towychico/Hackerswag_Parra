import React from 'react'
import './navBarCategory.css'
const NavBarCategory = (props) =>{
    return(
        <div className="navItemContainer">
            <img src={props.img} alt=""/>
            <h2>{props.text}</h2>
        </div>
    )
}
export default NavBarCategory;