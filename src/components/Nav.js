
import CheckoutCart from './CheckoutCart';
import { Link } from 'react-router-dom'

const Nav = () => {

    // const navStyles = {
    //     color: 'black',
    //     textDecoration: 'none',
    //     ':hover': {
    //         backgroundColor: 'green',
    //         textDecoration: 'underline'
    //     }
    // };

    return (
        <nav className="nav--bar">
            <h1>dora</h1>
            <ul className="nav--links">
                <Link to="/" >
                <li>About</li>
                </Link>
                <Link to="/shop" >
                <li>Shop</li>
                </Link>
                <Link to="/contact">
                <li>Contact</li>
                </Link>
                <li className="checkOut" >
                <CheckoutCart />
                 </li>
            </ul>
        </nav>
    )
}

export default Nav