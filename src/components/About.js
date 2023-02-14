import Nav from "./Nav"
import { useNavigate } from "react-router-dom"

const About = () => {
    const navigate = useNavigate()
    return (
        <div className="bg">
            <Nav />
            <div className="about-us">
                <h1>Start the season with 
                    <h2 className="linear-wipe"> dora</h2></h1>
                    <button onClick={() => navigate('/shop')} className="shop">Shop now</button>
             </div>
        </div>
        
    )
}

export default About