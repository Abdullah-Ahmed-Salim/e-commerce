import { createContext, useEffect } from "react";
import { useState } from "react";
import axios from "./axios";

const DataContext = createContext({})

export const DataProvider = ({children}) => {
    const [search, setSearch] = useState("")
    const [items, setItems  ] = useState([])
    const [cart, setCart] = useState([])
    const [count, setCount] = useState("")
    const [check, setCheck] = useState(false)
    const [searchResult, setSearchResult] = useState("")



    useEffect(() =>{
        const fetching = async () => {
            try{    
        const response = await axios.get("/data")
        setItems(response.data)
        
            }catch(err) {console.log(err.message)}
        }
        fetching();
       
        
    }, [items])



    
    useEffect(() => {
        const fetching = async () => {
            try{
            let response = await axios.get("cart")
            setCart(response.data)} catch (err) {console.log(err.message)}      
        }
        fetching();
        if (cart.length === 0) {setCheck(false)}  else if (cart.length >= 1) {setCheck(true)} 
    },[cart])





    const deleteFromCart = async (id) => {
        try{ 
            const item = items.find(item => item.id == id)
            await axios.delete(`/cart/${id}`)
            await axios.put(`/data/${id}`, {
                id: id,
                name: item.name,
                description: item.description,
                img: item.img,
                price: item.price,
                count: 0
            })
        }catch (err) {console.log(err.message)}
    }


    const addToCart = async (id) => {
        try{
            const item = items.find(item => item.id === id)
            await axios.post("/cart", {
                id: id,
                name: item.name,
                description: item.description,
                img: item.img,
                price: item.price,
                count: item.count
            })}catch (err){console.log(err.message)}   

    }


    
    const increment = async (id) => {
        try{
        const item = items.find(item => item.id === id) 
        item.count++
        let newValue = {...item, count: item.count}
            await axios.put(`/data/${id}`, newValue)
            await axios.put(`/cart/${id}`, newValue)
        }catch(err){
            console.log(err.message)
        }
    } 


    const decrement =async (id) => {
        try{
            const item = items.find(item => item.id === id)
            if (item.count > 0) {
            item.count--
            let newValue = {...item, count: item.count}
            await axios.put(`/data/${id}`, newValue)
            await axios.put(`/cart/${id}`, newValue)
            }}catch (err) {console.log(err.message)}
    }

    const checkOut = async () => {
        try{
            cart.map(async (item)  => {
                await axios.delete(`/cart/${item.id}`)
                setCart([])
            })
        }catch (err) {console.log(err.message)}
       

    }
    const emptyCart = async () => {
        try{
            cart.map(async (item)  => {
                await axios.delete(`/cart/${item.id}`)
                setCart([])
            })
        }catch (err) {console.log(err.message)}
       
    }
  

    
    return(
        <DataContext.Provider value={{
    search, setSearch, items, setItems, cart, setCart, count, setCount, deleteFromCart, addToCart, increment, decrement, checkOut, emptyCart
    , check , setCheck
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext