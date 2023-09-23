import Nav from './Nav'
import Home from './Home'
import Cart from "./Cart"
import Product from './Product'
import {DataProvider} from "./context"
import {Routes, Route} from "react-router-dom"
import './App.css'

function App() {





  return (
    <div>
    <DataProvider> 
    <Nav />
    <Routes>
    <Route path='/' element = { <Home /> }/>
    <Route path="/cart" element = {<Cart />} />
    <Route path="/cart/:id" element = {<Product />} />
    </Routes>
    </DataProvider>
    </div>
  )
}

export default App
