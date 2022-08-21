import React,{useState} from 'react'
import './ItemCounter.css'
const ItemCounter = (props) => {
    const [numberOfItems, updateNumberOfItems] = useState(props.initial);
    // eslint-disable-next-line no-unused-vars


    const AddItemToCart = ()=> {

        //updateNumberOfItems(numberOfItems + 1)
        if (props.stock >= numberOfItems) {
            updateNumberOfItems(numberOfItems + 1)

            /*
            let temp = numberOfItems
            updateNumberOfItems(numberOfItems + 1)
            */

        }
    }
    const SubstractItemToCart = ()=>{
        if(props.stock >= numberOfItems && numberOfItems > 0){
            let temp = numberOfItems
            updateNumberOfItems(numberOfItems-1)
        }
    }
    return(
        <div className="itemCounterContainer">
            <h2>{props.itemTitle}</h2>
            <div className="itemCounterButtonsContainer">
                <button onClick={SubstractItemToCart} className="ItemCounterMathButton">-</button>
                <p>{numberOfItems}</p>
                <button onClick={AddItemToCart} className="itemCounterMathButton">+</button>
            </div>
            <button className = "itemCounterSendButton">Add to cart!!!</button>
        </div>
        )
    }

export default ItemCounter;