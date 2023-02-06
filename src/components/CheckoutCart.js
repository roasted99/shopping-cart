import { useState, useContext } from "react"
import { CartContext } from "../CartContext"
import CartModal from "./CartModal"

const CheckoutCart = () => {
    const cart = useContext(CartContext)
    const [show, setShow] = useState(false)

    const productsCount = cart.items.length
    
    return (
        <>
        <button className="check-out" onClick={() => setShow(true)}>
            <p>Cart <span className="counter">{productsCount}</span> Item</p> 
        </button>
        <CartModal 
        onClose={() => setShow(false)}
        show={show}
        productsCount = {productsCount}
        />
        </>
    )
}

export default CheckoutCart