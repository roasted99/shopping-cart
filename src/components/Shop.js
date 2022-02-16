import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import CheckOut from "./CheckOut"
import Card from "./Card"
import shoppingCart from "../images/shop-cart.png"

const Shop = () => {

    const [items, setItems] = useState([])

    const fetchItems = async () => {
        const data = await fetch('https://fakestoreapi.com/products');
        const items = await data.json();
        setItems(items)
    }

    useEffect(() => {
        fetchItems()
    }, []);

    const cards = items.map(item => {
        return (
            <Link to={`${item.id}`}>
                <Card
                    key={item.id}
                    img={item.image}
                    title={item.title}
                    rating={item.rating.rate}
                    reviewCount={item.rating.count}
                    price={item.price} />
            </Link>
        )
    })

    const handleCheckOut = () => {
        return (
            <Link to={'checkout'}>
                <CheckOut />
            </Link>
        )
    }

    return (

        <div className="main--content">
            <h1 className="page--title">Shop Page</h1>
            <div className="checkOut">
                <img src={shoppingCart} alt="Shopping Cart" className="cart--img" onClick={handleCheckOut}/>
                <span className="counter">0</span>
            </div>
            <div className="card--list">
                {cards}
            </div>
        </div>

    )
}
export default Shop