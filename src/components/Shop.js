import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Card from "./Card"
import CheckoutCart from "./CheckoutCart"

const Shop = () => {
    
    const [items, setItems] = useState([])
    // const [showModal, setShowModal] = useState(false)

    const fetchItems = async () => {
        const data = await fetch('https://fakestoreapi.com/products');
        const items = await data.json();
        setItems(items)
    }
    console.log(items)

    useEffect(() => {
        fetchItems()
    }, []);


    const cards = items.map(item => {
        return (
            <Link to={`${item.id}`}>
                <Card
                    id={item.id}
                    img={item.image}
                    title={item.title}
                    rating={item.rating.rate}
                    reviewCount={item.rating.count}
                    price={item.price} />
            </Link>
        )
    })


    return (

        <div className="main--content">
            <h1 className="page--title">Happy Shopping!</h1>
            {/* <button className="checkOut" onClick={() => setShowModal(true)}>
            <p>Cart <span className="counter">0</span> Item</p> 
             </button> */}
             <CheckoutCart/>
            <div className="card--list">
                {cards}
            </div>
        </div>

    )
}
export default Shop