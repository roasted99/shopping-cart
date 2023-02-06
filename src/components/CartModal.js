import { CartContext } from "../CartContext"
import { useContext } from "react"

const CartModal = (props) => {
    const cart = useContext(CartContext)

    if (!props.show) {
        return null
    }
    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="windowClose" onClick={props.onClose}>X</div>
                <div className="modal-body">
                    {props.productsCount > 0 ?
                    <>
                    <p>Items in your cart:</p>
                    {cart.items.map((product, index) => (
                        <p>{product.id}</p>
                    ))}

                    <h2>Total: {cart.getTotalCost().toFixed(2)}</h2>
                    </>
                    :
                    <h1>There are no items in your cart!</h1>
                
                    }
                    <p>This is from modal</p>
                </div>
            </div>
        </div>
    )
}

export default CartModal