import { useDispatch, useSelector } from "react-redux";
import { addItem , removeItem} from "../redux/cartSlice";
import { useEffect, useState } from "react";

const Card = (props) => {
    const {image  , title , price , category , rating , index , id , quantity} = props;
    const [added,setAdded] = useState(true)
    const dispatch = useDispatch();

    const [localQuantity,setLocalQuantity] = useState(1);
   

    const increaseQuantity = () => {
        // dispatch(setLocalQuantity({ productId: id, quantity: localQuantity + 1 }));
        setLocalQuantity(localQuantity + 1);
    };

    const decreaseQuantity = () => {
        if (localQuantity > 0) {
            // dispatch(setLocalQuantity({ productId: id, quantity: localQuantity - 1 }));
            setLocalQuantity(localQuantity - 1);
        }
    };
    
    useEffect(() => {
        setAdded(localQuantity > 0);
    }, [localQuantity]);
    
    return (
        <div key = {index} style={{height : "max-content" , width : "220px" , border : "2px solid black" , padding : "10px" , margin : "1rem" , background : "#fffff"}}>
            <img src = {image} alt = "na" height= "100px" width = "100px" />
            <h4 className="title">{title}</h4>
            <h5>${price}</h5>
            <h6>{category}</h6>
            <p>{rating.rate}</p>
            {
                added ? 
                <button className="btn" onClick={()=> {dispatch(addItem(props)); setAdded(false)}}>Add to cart</button>
                :
                    <div>
                        <button className="box" onClick={() => {dispatch(addItem(props)); increaseQuantity(props.id);}}>+</button>
                        <span>{localQuantity}</span>
                        <button className = "box" onClick={()=>{dispatch(removeItem(id)); decreaseQuantity();}}>-</button>
                    </div>
            }
            
        </div>
    )
}

export default Card;