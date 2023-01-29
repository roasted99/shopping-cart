const CartModal = (props) => {

    if (!props.show) {
        return null
    }
    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-body">
                    <div className="windowClose" onClick={props.onClose}>X</div>
                    <p>This is from modal</p>
                </div>
            </div>
        </div>
    )
}

export default CartModal