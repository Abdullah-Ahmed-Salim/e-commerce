import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "./context";


const Nav = () => {
    const {search, setSearch, items, setItems} = useContext(DataContext);
     

    
   

    return(
        <div className="top">
        <nav>
            <h3 className="nav-logo">LOGO</h3>
            <ul className="nav-list">
               <Link to={"/"}><li > Home </li> </Link> 
               <Link to={"/cart"}><li> cart </li></Link>
                <li> About </li>
            </ul>
        </nav>
        <form className = "search-form">
            <label htmlFor="search">Search</label>
            <input
            placeholder="Search"
            type="text"
            id="search"
            autoComplete="on"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
        </form>
        </div>
    )
}

export default Nav