import { CartContext } from "../CartContext";
import { useContext } from "react";
import useFetch from "../ItemData";

function CartItem(props) {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const [item] = useFetch(`https://fakestoreapi.com/products/${id}`);

  return (
    <tr>
      <td data-label="Item Image">
        <img className="cart-img" src={item.image} alt={item.description} />
      </td>
      <td data-label="Description">{item.description}</td>
      <td data-label="Quantity">
        <div>
          <button className="quantity" onClick={() => cart.addOneToCart(item.id)}>+</button>
          <label> {quantity}</label>
          <button className="quantity" onClick={() => cart.removeFromCart(item.id)}>-</button>
        </div>
      </td>
      <td data-label="Price">$ {item.price}</td>
      <td data-label="Remove">
        <button onClick={() => cart.deleteFromCart(id)}>Remove</button>
      </td>
      <td data-label="Total">$ {(quantity * item.price).toFixed(2)}</td>
    </tr>
  );
}

export default CartItem;
