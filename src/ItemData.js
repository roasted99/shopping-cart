import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(url);
        const items = await data.json();
        setItems(items)
    }
    
    useEffect(() => {
        fetchItems()
    }, [url]);

    return [items];
}


export default useFetch;