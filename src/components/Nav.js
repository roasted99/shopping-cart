import logo from '../images/logo.png'
import CheckoutCart from './CheckoutCart';
import { CartContext } from "../CartContext"
import { Link } from 'react-router-dom'

const Nav = () => {

    const navStyles = {
        color: 'black',
        textDecoration: 'none',
        ':hover': {
            backgroundColor: 'green',
            textDecoration: 'underline'
        }
    };

    return (
        <nav className="nav--bar">
            <img src={logo} alt="logo" className='nav--logo'/>
            <ul className="nav--links">
                <Link to="/" style={navStyles}>
                <li>About</li>
                </Link>
                <Link to="/shop" style={navStyles }>
                <li>Shop</li>
                </Link>
                <Link to="/contact"style={navStyles}>
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