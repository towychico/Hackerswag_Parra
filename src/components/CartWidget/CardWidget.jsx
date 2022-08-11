import React from 'react'
import './CartWidget.css'
const CartWidget = (props) => {
    return(
        <div className="cartWidgetContainer">
            <p>${props.cartValue}</p>
            <img src="" alt=""/>
            <img src="" alt=""/>
        </div>
    )
}

export default CartWidget;