import star from "../images/star.png"

const Card = (props) => {

    return (
        <div className="card" key={props.id}>
            <img src={props.img} alt={props.title} className="card--img" />
            <h3 className="item--title">{props.title}</h3>
            <div className="item--status">
                <img src={star} alt="Star Icon" className="card--star" />
                <span>{props.rating}</span>
                <span>({props.reviewCount})</span>
            </div>
            <p>$ {props.price}</p>
        </div>
    )
}

export default Card