import star from "../images/star.png"
import shoppingCart from "../images/shop-cart.png"
import CheckOut from "./CheckOut"
import { useParams, Link } from "react-router-dom"
import { useState,useEffect } from "react"

const ItemDetail = () => {

    const [item, setItem] = useState({})
    const [cart, setCart] = useState(0)
    const [quantity, setQuantity] = useState(1)

    const params = useParams()

    const fetchItem = async() => {
        const data = await fetch(`https://fakestoreapi.com/products/${params.id}`);
        const item = await data.json();
        console.log(item)
        setItem(item)
    }

    useEffect(() => {
        fetchItem()
    }, []);

    const handleCart = () => {
        setCart(prev => prev + 1)
    }

    const handleQuantity = (event) => {
        setQuantity(event.target.value)
    }

    const handleCheckOut = () => {
        return  <Link to='/shop/checkout'>
        <CheckOut 
        title={item.title}
        quantity={quantity}
        subTotal={subTotal}/>
        <h4>Total: <span>{plusAll}</span></h4>
        </Link>
    }

    const subTotal = parseFloat(item.price * quantity)

    const plusAll = () => {
        let total = 0;
        for(let i = 0; i < subTotal.length; i++){
            return total += subTotal[i]
        }
  }

    return (
        
           <div className="item--content">
           <div className="checkOut" >
                <img src={shoppingCart} alt="Shopping Cart" className="cart--img" onClick={handleCheckOut}/>
                <span className="counter">{cart}</span>
            </div>
               <h1 className="detail--title">{item.title}</h1>
               <img src={item.image} alt={item.title} className="detail--img"/>
               <div>
                   <img src={star} alt="Star Icon" className="detail--star"/>
                    <span>{item.rating.rate}</span>
                    <span>( {item.rating.count})</span>
               </div>
               <p>$ {item.price}</p>
               <h3>Description:</h3>
               <p className="item--description">{item.description}</p>
               <label htmlFor="quantity">Quantity: </label>
               <input type="number" name="quantity" value={quantity} onChange={handleQuantity}/>
               <button className="add-to-cart" onClick={handleCart}>Add to Cart</button>
           </div>
        
    )
}

export default ItemDetail