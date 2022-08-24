import React,{useState} from 'react'
import './ItemCounter.css'

import CartWidget from "../CartWidget/CartWidget";

const onAdd = (f) => {
    console.log('dfsjk')
    return 34
}
const ItemCounter = (props) => {
    const [numberOfItems, updateNumberOfItems] = useState(props.initial);
    // eslint-disable-next-line no-unused-vars

    const AddItemToTemporalCart = ()=> {

        //updateNumberOfItems(numberOfItems + 1)
        if  (numberOfItems <= props.stock) {
            updateNumberOfItems(numberOfItems + 1)
            /*
            let temp = numberOfItems
            updateNumberOfItems(numberOfItems + 1)
            */

        }
    }
    const SubstractItemFromTemporalCart = ()=>{
        if(numberOfItems > 0){
            let temp = numberOfItems
            updateNumberOfItems(numberOfItems-1)
        }
    }
    return(
        <div className="itemCounterContainer">
            <h2>{props.itemTitle}</h2>
            <div className="itemCounterButtonsContainer">
                <button onClick={SubstractItemFromTemporalCart} className="ItemCounterMathButton">-</button>
                <p>{numberOfItems}</p>
                <button onClick={AddItemToTemporalCart} className="itemCounterMathButton">+</button>
            </div>
            <button onClick={onAdd} className = "itemCounterSendButton">Add to cart!!!</button>
        </div>
        )
    }

export default ItemCounter;
export const getTotal = onAdd.bind(this);