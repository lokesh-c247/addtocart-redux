import { useEffect} from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { allData } from "../redux/quantitySlice";

const Main = () => {

    const allItems = useSelector((state) => (state?.quantity?.allProducts));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allData());
    }, [])

    console.log(allItems , "allitems");

    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {
                allItems?.map((product, index) => (
                    <Card {...product} key={index} />
                ))}
        </div>
    )
}

export default Main;