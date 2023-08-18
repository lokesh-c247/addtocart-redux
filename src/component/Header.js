import { useDispatch, useSelector } from "react-redux";
import { clearCart} from "../redux/cartSlice";
const Header = () => {

    const allItems = useSelector((state) => state.cart.items)
    console.log(allItems , "cartlen")
    const dispatch = useDispatch();
    return (
       <div style={{display : "flex" , alignItems : "center" , justifyContent : "space-around" , margin : "1rem" }}>
            <div>Food App</div>
            <div>
                <ul style={{listStyle : "none" , display : "flex" , flexDirection : "column" , gap : "5px"}}>
                    <li>Quantity :- {allItems.length}</li>
                    <button><li onClick={()=>{dispatch(clearCart())}} >Clear cart</li></button>
                </ul>
                
            </div>
       </div>
    )
}

export default Header;