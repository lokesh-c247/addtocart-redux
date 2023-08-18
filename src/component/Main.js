import { useEffect, useState } from "react";
import Card from "./Card";

const Main = () => {

    const [allProducts , setAllProducts] = useState([]);

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(json => setAllProducts(json.map((product)=>({
            ...product,
            quantity : 0
        }))))
    },[])


    return (
        <div style={{display : "flex" , flexWrap : "wrap" }}>
        {
            allProducts.map((product , index)=>(
                    <Card {...product}  key = {index}/>
            ))}   
        </div>
    )
}

export default Main;