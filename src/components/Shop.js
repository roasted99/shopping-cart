import { useState, useEffect } from "react"
import Navbar from "./Nav"
import Card from "./Card"
import shoppingCart from "../images/shop-cart.png"

const Shop = () => {

    const [items, setItems] = useState([])

    const fetchItems = async() => {
        const data = await fetch('https://fakestoreapi.com/products');
        const items = await data.json();
        console.log(items)
        setItems(items)
    }

    useEffect(() => {
        fetchItems()
    }, []);

    const cards = items.map(item => {
        return (
            <Card
            key={item.id}
           img={item.image}
           title={item.title}
           rating={item.rating.rate}
           reviewCount={item.rating.count} 
           price={item.price}/>
        )
    })
    

    return (
        <div>
            <Navbar />
            <div className="main--content">
                <h1 className="page--title">Shop Page</h1>
                <div className="checkOut">
                <img src={shoppingCart} alt="Shopping Cart" className="cart--img"/>
                <span className="counter">0</span>
            </div>
        <div className="card--list">
           {cards}
        </div>
        </div>
        </div>
    )
}
export default Shop