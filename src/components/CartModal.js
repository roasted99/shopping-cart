import CartItem from "./CartItem";
import { CartContext } from "../CartContext";
import { useContext } from "react";

const CartModal = (props) => {
  const cart = useContext(CartContext);

  if (!props.show) {
    return null;
  }
  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="windowClose" onClick={props.onClose}>
          X
        </div>
        <div className="modal-body">
          {props.productsCount > 0 ? (
            <>
            
            <table>
              <caption>Item in your cart</caption>
              <thead>
                <tr>
                  <th scope="col">Item Image</th>
                  <th scope="col">Description</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                  <th scope="col">Remove</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
              {cart.items.map((product, index) => (
                <CartItem 
                key={index}
                id={product.id}
                quantity={product.quantity}/>
              ))}
              </tbody>
              <tfoot>
                <tr>
                  <th scope="row" colSpan={5}>Subtotal</th>
                  <td> $ {cart.getTotalCost().toFixed(2)}</td>
                </tr>
              </tfoot>
            </table> 
            </>
          ) : (
            <h1>There are no items in your cart!</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
