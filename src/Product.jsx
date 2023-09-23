import React from "react";
import { useContext } from "react";
import DataContext from "./context";
import { useParams } from "react-router-dom";

const Product = () => {
    const {items, setItems, increment, decrement, addToCart} = useContext(DataContext);
    const {id} = useParams();
    const item = items.find(item => (item.id).toString() === id)
    console.log(Object.values(item))
    
    return(
        <div>
            <img  src={`/images/${item.img}`} width={200}/> 
            <h1 className="list-name">{item.name}</h1>
            <p className="list-description">{item.description}</p>
            <p className="list-price">{item.price}</p>
            <div className="nymbers">
                <button className="plus" onClick={() =>increment(item.id)}>+</button>
                <p className="list-count">{item.count}</p>
                <button className="minus" onClick={() => decrement(item.id)}>+</button>
            </div>
            <button className="sub" onClick={() => addToCart(item.id)}>add to cart</button>
        </div>
    )
}

export default Product