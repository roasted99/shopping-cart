import clothing from '../images/clothing-store.jpg'

const About = () => {
    return (
        <div className="about-us">
            <h1>About Us</h1>
            <img src={clothing} alt="Clothes in Store" className="store-img"/>
            <p className='description'> Style is more than the clothes we wear, it's how we carry ourselves. 
                Our style reveals what is distinct and unique about us.At our Wonderland Boutique
                we value uniqueness in every of our product which are all made with organic.</p>
        </div>
    )
}

export default About