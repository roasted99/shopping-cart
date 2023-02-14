import { Link } from "react-router-dom"
import Card from "./Card"
import Nav from "./Nav"
import useFetch from "../ItemData"


const Shop = () => {
   
const [items] = useFetch('https://fakestoreapi.com/products')
console.log(items)
   

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


    return (
        <>
        <Nav />
        <div className="main--content">
            <h1 className="page--title">Happy Shopping!</h1>
            <div className="card--list">
                {cards}
            </div>
        </div>
        </>

    )
}
export default Shop