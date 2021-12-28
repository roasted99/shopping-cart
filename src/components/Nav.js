import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

const Nav = () => {

    const navStyles = {
        color: 'black',
        textDecoration: 'none'
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
            </ul>
        </nav>
    )
}

export default Nav