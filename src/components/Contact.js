import logo from "../images/logo.png"
import Nav from "./Nav"

const Contact = () => {
    return (
        <div className="contact">
            <img src={logo} alt="logo" />
            <div className="contact--info">
                <p>123 Michealson Drive, Singapore 987654</p>
                <p>Phone: (+65)123 456, 456 789</p>
                <p>Email: info@wonderland.com</p>
            </div>
        </div>

    )
}

export default Contact