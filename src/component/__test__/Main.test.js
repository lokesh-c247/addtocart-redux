import { screen, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import Main from "../Main";

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const mockProducts = [
    { id: 1, title: "product1", image: "image-url", index: "index", category: "category", price: "price" }
]

describe("Main Component", () => {
    test("It should render a list of products from the redux store", async () => {
        const intitalState = {
            quantity: {
                allProducts: mockProducts
            }
        }
        const store = mockStore(intitalState)

        render(
            <Provider store={store}>
                <Main />
            </Provider>
        );

        // const product1Element = await screen.findByText(mockProducts[0].title);
        // await waitFor(async () =>expect(await screen.findByText(mockProducts[0].title)).toBeInTheDocument())
        // setTimeout(async ()=> {
        //     await screen.findByText(mockProducts[0].title)
        // }, 5000)

        mockProducts.forEach((product) => {
            const productTitleElement = screen.queryByText(product.title);
            // console.log(product.title);
            expect(productTitleElement).toBeInTheDocument();
        })
    })
})