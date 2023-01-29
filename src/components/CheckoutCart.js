// import { useNavigate } from "react-router-dom"
import { useState } from "react"
import CartModal from "./CartModal"

// const CheckoutCart = () => {
//     const navigate = useNavigate()

//     const [itemCount, setItemCount] = useState(0)

//     const handleCheckOut = () => {
//         return (
//         navigate("/shop/checkout")
//         )
//     } 
    
//     return (
//         <button className="checkOut" onClick={handleCheckOut}>
//             <p>Cart <span className="counter">{itemCount}</span> Item</p> 

//         </button>
//     )
// }

const CheckoutCart = () => {
    const [show, setShow] = useState(false)
    
    return (
        <>
        <button className="checkOut" onClick={() => setShow(true)}>
            <p>Cart <span className="counter">0</span> Item</p> 
        </button>
        <CartModal 
        onClose={() => setShow(false)}
        show={show}
        />
        </>
    )
}

export default CheckoutCart