import { createContext, useState } from "react";

export const CartContext = createContext({
    items: [],
    getItemQuantity: () => {},
    addToCart: () => {},
    removeFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}
})

export function CartProvider({children}) {
    const [cartItems, setCartItems] = useState([]);

    const getItemData = async() => {
        const data = await fetch(`https://fakestoreapi.com/products`);
        const item = await data.json();
        return item;
    }

    function getItemQuantity(id) {

        const quantity = cartItems.find(item => item.id === id)?.quantity 

        if (quantity === undefined) {
            return 0;
        }

        return quantity;
    }

    function addToCart(id) {
        const quantity = getItemQuantity(id);

        if (quantity === 0) {
            setCartItems(
                [
                    ...cartItems,
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )
        } else {
            setCartItems(
                cartItems.map(
                    item => item.id === id ? {...item, quantity: item.quantity + 1} : item
                )
            )
        }
    }

    function removeFromCart(id) {
        const quantity = getItemQuantity(id);

        if (quantity === 1) {
            deleteFromCart(id)
        } else {
            setCartItems(
                cartItems.map( item => item.id === id ? {...item, quantity: item.quantity - 1} : item)
            )
        }
    }

    function deleteFromCart(id) {
        setCartItems(
            cartItems => cartItems.filter(currentItem => {
                return currentItem.id !== id;
            })
        )
    }

    function getTotalCost() {
        let totalCost = 0;
        cartItems.map((cartItem) => {
            const itemInfo = getItemData(cartItem.id);
            totalCost += (itemInfo.price * cartItem.quantity);
        });
        return totalCost
    }

    const contextValue = {
        items: cartItems,
        getItemQuantity,
        addToCart,
        removeFromCart,
        deleteFromCart,
        getTotalCost
    }
    return (

        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider