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
               <form>
                <label htmlFor="quantity">In Cart: {itemQuantity}</label>
                <button className="quantity" onClick={() => cart.addOneToCart(item.id)}>+</button>
                <button className="quantity" onClick={() => cart.removeFromCart(item.id)}>-</button>
               </form>
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