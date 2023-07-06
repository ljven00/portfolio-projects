import { useState } from "react";
import "../Shelf.scss";

interface Props {
    name: string,
    icon: string,
    updateShelf: any
}

export default function Shelf({name, icon, updateShelf}: Props) {
    const [quantity, setQuantity] = useState(0);
    const [iconQty, setIconQty] = useState([""]);

    /** adds an element on the shelf */
    function add() {
        setQuantity(prev => prev + 1);
        setIconQty(prev => [...prev, icon]);
    }

    /** removes the last element added on the shelf */
    function substract() {
        if(quantity > 0){
            setQuantity(prev => prev - 1);
            setIconQty(prevQty => prevQty.filter(filtering));
        }
        else
            return;
    }

    /** removes the last element of an array */
    function filtering(value: any, index: number, array: string[]){
        return index < array.length - 1;
    }

    /** resets the shelf's element count */
    function clear(){
        setQuantity(0);
        setIconQty([""]);
    }
    
    return(
        <div className="shelf">
            <div className="name-container">
                <span className="name">{name}</span>
                <span className="qty">{quantity.toString()}</span>
            </div>
            <div className="btn-container">
                <button onClick={clear} className="clear">Clear</button>
                <button onClick={substract} className="minus">-</button>
                <button onClick={add} className="plus">+</button>
            </div>
            <p className="fruits">{iconQty}</p>
            <button id={name + `-${icon}`}
            onClick={(e: any) => {
                let removeEl = e.target.id.replace("-", "");
                updateShelf((prev: any) => prev.filter((e: string) => e !== removeEl));
            }} 
            className="close">X</button>
        </div>
    )
}