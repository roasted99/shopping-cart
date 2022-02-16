

const CheckOut = (props) => {

    return (
        <div>
            
            <h2>Check Out</h2>
            <p><span>{props.title}</span> <span>{props.quantity}</span>  <span>{props.subTotal}</span></p>
            

        </div>
    )
}
export default CheckOut