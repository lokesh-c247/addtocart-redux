import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { clearCart} from "../redux/cartSlice";
import i18next from '../i18n';
import React from "react";
import i18n from "i18next";


const Header = () => {
    const {t} = useTranslation();

    const allItems = useSelector((state) => state.cart.items)
    const dispatch = useDispatch();
    const [locale , setLocal] = React.useState(i18n.language);

    i18next.on("languageChanged" , (lng) => setLocal(i18n.language))

    const handleChange = (event) => {
        i18next.changeLanguage(event.target.value);
    }
    
    return (
       <div style={{display : "flex" , alignItems : "center" , justifyContent : "space-around" , margin : "1rem" }}>
            <div><h1>{t("title")}</h1></div>
            <div>
                <ul style={{listStyle : "none" , display : "flex" , flexDirection : "column" , gap : "5px"}}>
                    <li>Quantity :- {allItems.length}</li>
                    <button ><li data-testId = "clearCartBtn" onClick={()=>{dispatch(clearCart())}} >Clear cart</li></button>
                </ul>
            </div>
            <div>
                <select value={locale} onChange={handleChange}>
                    <option value="en">English</option>
                    <option value="hi">Hindi</option>
                </select>
            </div>
       </div>
    )
}

export default Header;