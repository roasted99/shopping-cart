import star from "../images/star.png"
import shoppingCart from "../images/shop-cart.png"
import CheckOut from "./CheckOut"
import { CartContext } from "../CartContext"
import { useContext } from "react"
import { useParams, Link } from "react-router-dom"
import { useState,useEffect } from "react"
import useFetch from "../ItemData"

const ItemDetail = () => {


    const params = useParams()
    const [item] = useFetch(`https://fakestoreapi.com/products/${params.id}`)

    // const useFetch = (url) => {
    //     const [items, setItems] = useState([]);
    
    //     const fetchItems = async () => {
    //         const data = await fetch(url);
    //         const items = await data.json();
    //         setItems(items)
    //     }
        
    //     useEffect(() => {
    //         fetchItems()
    //     }, [url]);
    
    //     return [items];
    // }

    // function getItemData(id) {
    //     const item = items.find(item => item.id === id)

    //     if (id === undefined) {
    //         console.log("undefined id")
    //     }
    //     return item
    // }

    // const item = getItemData(params.id)
    // console.log(item)
    const cart = useContext(CartContext);
    const itemQuantity = cart.getItemQuantity(item.id);
    console.log(cart.items)

    return (
        
           <div className="item--detail">
           
               <img src={item.image} alt={item.title} className="detail--img"/>
            <div className="item--info">
          
               <h1 className="detail--title">{item.title}</h1>
               {/* <div>
                   <img src={star} alt="Star Icon" className="detail--star"/>
                    <span>{item.rating.rate}</span>
                    <span>( {item.rating.count})</span>
               </div> */}
               <p>$ {item.price}</p>
               <p className="item--description">{item.description}</p>
               { itemQuantity > 0 ?
                <>
                <div>
                    <button className="quantity" onClick={() => cart.addOneToCart(item.id)}>+</button>
                    <label htmlFor="quantity">In Cart: {itemQuantity}</label>
                    <button className="quantity" onClick={() => cart.removeFromCart(item.id)}>-</button>
                </div>
               <br />
               <button className="delete-from-cart" onClick={() => cart.deleteFromCart(item.id)}>Remove from cart</button>
               </>
               :
                <button className="add-to-cart" onClick={() => cart.addOneToCart(item.id)}>Add to Cart</button>
            }
             
               
            </div>
           </div>
        
    )
}

export default ItemDetail