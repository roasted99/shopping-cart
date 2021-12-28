import Nav from "./Nav"

const CheckOut = () => {

    return (
        <div>
            <Nav />
            <h2>Check Out</h2>
            <table className="checkout">
                <tr className="table--head">
                    <th>Item Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
                <tr>

                </tr>
                <tr>
                    <td>Total:</td>
                    <td></td>
                </tr>
            </table>

        </div>
    )
}
export default CheckOut