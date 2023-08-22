import { fireEvent, render, screen } from "@testing-library/react";
import Card from "../Card";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

const mockStore = configureStore();

describe("Card Component", () => {
    test("should render component with correct props", () => {
        const initialState = {
            quantity: {
                allProducts: [
                    { id: 1, quantity: 1 },
                    { id: 2, quantity: 2 }

                ]
            }
        }
        const store = mockStore(initialState);
        render(
            <Provider store={store}>
                <Card
                    image="image-url"
                    title="Item 1"
                    price="$10"
                    category="Category"
                    rating={{ rate: 4.5 }}
                    index={0}
                    id={1}
                />
            </Provider>
        )
        const titleElement = screen.getByTestId("titleCard");
        expect(titleElement).toBeInTheDocument();

        const addToCartBTn = screen.getByTestId("btn")
        fireEvent.click(addToCartBTn)

        const plusBtn = screen.getByTestId("plusBtn")
        fireEvent.click(plusBtn);

        const minusBtn = screen.getByTestId("minusBtn")
        fireEvent.click(minusBtn);
    });

}) 
