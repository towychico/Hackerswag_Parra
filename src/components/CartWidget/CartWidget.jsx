import React,{useState} from 'react'
import './CartWidget.css'
import userIcon from '../img/icons/user.png'
import  bagIcon from '../img/icons/bag.png'



const CartWidget = (props) => {
    const [cartValue, UpdateCartValue] = useState(0);
    return(
        <div className="cartWidgetContainer">
            <p id="cartTotalId">${cartValue}</p>
            <img src={bagIcon} alt=""/>
            <img src={userIcon} alt=""/>
            <p  className="regularText">My Acount</p>
        </div>
    )
}


export default CartWidget;

