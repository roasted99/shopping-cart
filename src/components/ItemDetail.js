import star from "../images/star.png"
import { CartContext } from "../CartContext"
import { useContext } from "react"
import { useParams} from "react-router-dom"

import useFetch from "../ItemData"
import Nav from "./Nav"

const ItemDetail = () => {


    const params = useParams()
    const [item] = useFetch(`https://fakestoreapi.com/products/${params.id}`)

   
    const cart = useContext(CartContext);
    const itemQuantity = cart.getItemQuantity(item.id);
    console.log(cart.items)

    return (
        <>
        <Nav />
           <div className="item--detail">
           
               <img src={item.image} alt={item.title} className="detail--img"/>
            <div className="item--info">
          
               <h1 className="detail--title">{item.title}</h1>
               {/* <div>
                   <img src={star} alt="Star Icon" className="detail--star"/>
                    <span>{item.rating.rate}</span>
                    <span>( {item.rating.count})</span>
               </div> */}
               <h2>$ {item.price}</h2>
               <p className="item--description">{item.description}</p>
               <br />
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
           </>
    )
}

export default ItemDetail