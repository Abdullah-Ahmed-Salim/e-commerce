import React from "react";
import { useContext, useEffect } from "react";
import DataContext from "./context";

const Cart  = () => {
    const {cart,  increment, decrement, deleteFromCart, checkOut, emptyCart, check } = useContext(DataContext)

    return(
        
        <main>
       <ul className="list-parent">
        {cart.map(item => (
            <li key={item.id} className="list-child">
                <img src={`images/${item.img}`} width={200} />
                <h3 className="list-name">{item.name}</h3>
                <p className="list-description">{item.description}</p>
                <p className="list-price">{`${(item.price * item.count).toFixed(0)}.49`}</p>
                <div className="numbers">
            <button className="plus" onClick={() => increment(item.id)}>+</button>
            <p className="list-count">{item.count}</p>
            <button className="minus" onClick={() => decrement(item.id)}>-</button>
         </div>
         <button className="sub" onClick={() => deleteFromCart(item.id)}>delete from cart</button>
            </li>
        ))}
       </ul>
       {(!check) ||
       <div>
       <button onClick={() => checkOut()}>check out</button>
       <button onClick={emptyCart}>empty cart</button>
       </div>}

    </main>
    )
}

export default Cart