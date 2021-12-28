import star from "../images/star.png"

const ItemDetail = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <img src={`../images/${props.img}`} placeholder="Item Pic" />
            <div className="item--status">
                <img src={star} alt="Star Icon" className="card--star" />
                <span>{props.rating}</span>
                <span>({props.reviewCount})</span>
            </div>
            <p>$ {props.price}</p>
            <p>{props.description}</p>
            <label htmlFor="quantity">Qty:</label>
            <input type="number" name="quantity" />
            <button>Add to Cart</button>
        </div>
    )
}

export default ItemDetail