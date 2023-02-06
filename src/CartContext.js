import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
    items: [],
    getItemQuantity: () => {},
    addOneToCart: () => {},
    removeFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}
});

export function CartProvider({children}) {
    const [cartItems, setCartItems] = useState([]);

    const itemArray = async() => {
        const data = await fetch(`https://fakestoreapi.com/products`);
        const items = await data.json();
        return items;
    }

    useEffect(() => {
        itemArray()
    }, []);

    function getItemData(id) {
        let itemData = itemArray.find(item => item.id === id);

        if (itemData == undefined) {
            console.log("Item data does not exist for ID:" + id);
            return undefined;
        }
        return itemData;
    }

    function getItemQuantity(id) {
        const quantity = cartItems.find(item => item.id === id)?.quantity;

        if (quantity === undefined) {
            return 0;
        }

        return quantity;
    }

    function addOneToCart(id) {
        console.log('in context')
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
        addOneToCart,
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

export default CartProvider;