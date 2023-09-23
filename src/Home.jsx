import React from "react";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import DataContext from "./context";



const Home = () => {
    const {addToCart, items} = useContext(DataContext);

            
 

    return(
        <main>
            <ul className="list-parent">
                {items.map(item => (
                    <li key={item.id} className="list-child">
                        
                        <img src= {`/images/${item.img}`} width={200}/>
                        <Link to={`/cart/${item.id}`}>
                        <h3 className="list-name">{item.name}</h3>
                        <p className="list-description">{item.description}</p>
                        <div className="list-numbers">
                        <p className="list-price">{item.price}</p>
                        </div>
                        </Link>
                        <button className="sub" onClick={() => addToCart(item.id)}>add to cart</button>
                     
                    </li>
                ))}

            </ul>
        </main>

    )
}

export default Home