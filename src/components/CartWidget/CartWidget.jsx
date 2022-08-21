import React from 'react'
import './CartWidget.css'
import userIcon from '../img/icons/user.png'
import  bagIcon from '../img/icons/bag.png'
const CartWidget = (props) => {
    return(
        <div className="cartWidgetContainer">
            <p>${props.cartValue}</p>
            <img src={bagIcon} alt=""/>
            <img src={userIcon} alt=""/>
            <p  className="regularText">My Acount</p>
        </div>
    )
}

export default CartWidget;