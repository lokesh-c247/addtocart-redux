import React, { useEffect } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/localQuantitySlice";

const Main = () => {
    const dispatch = useDispatch();
    const allProducts = useSelector(state => state.localQuantity.allProducts);
    const localQuantities = useSelector(state => state.localQuantity);

    useEffect(() => {
        dispatch(fetchProduct());
    }, []);

    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {allProducts?.map((product, index) => (
                <Card
                    {...product}
                    localQuantity={localQuantities[product.id] || 0}
                    key={index}
                />
            ))}
        </div>
    );
}

export default Main;
