import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../redux/cartSlice";
import { useState } from "react";
import { decreaseQuantity, increaseQuantity } from "../redux/quantitySlice";

const Card = (props) => {
    const { image, title, price, category, rating, index, id } = props;
    const [added, setAdded] = useState(true)
    const allItems = useSelector((state) => (state.quantity.allProducts));
    const dispatch = useDispatch();

    return (
        <div key={index} style={{ height: "max-content", width: "220px", border: "2px solid black", padding: "10px", margin: "1rem", background: "#fffff" }}>
            <img src={image} alt="na" height="100px" width="100px" />
            <h4 data-testId = "titleCard"className="title">{title}</h4>
            <h5>{price}</h5>
            <h6>{category}</h6>
            <p>{rating?.rate}</p>
            {
                added ?
                    <button data-testId = "btn" className="btn" onClick={() => { dispatch(addItem(props)); setAdded(false) }}>Add to cart</button>
                    :
                    <div>
                        <button data-testId = "plusBtn" className="box" onClick={() => { dispatch(addItem(props)); dispatch(increaseQuantity(id)); }}>+</button>

                        <span>{allItems.find((item) => item.id === id).quantity}</span>

                        <button data-testId = "minusBtn" className="box" onClick={() => { dispatch(removeItem(id)); dispatch(decreaseQuantity(id)) }}>-</button>
                    </div>
            }

        </div>
    )
}

export default Card;