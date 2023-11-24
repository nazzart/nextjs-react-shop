import { CartItemsContext, CartItemsProvider } from "@/app/context/CartItems";
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { useContext } from "react";
import {cartItems as mockCartItems} from "./mocks/cartData";

const TestingComponent = () => {
    const { cartItems, setCartItems } = useContext(CartItemsContext);

    return (
        <>
        <button onClick={() => setCartItems(mockCartItems)} data-testid="test-button">click</button>
            {cartItems.map((item, id) => (
                <p key={id}>{item.name}</p>
            ))}
        </>
    );
  };
  
describe("CartItemsContext", () => {

    it("should pass the context to the child component", () => {
        render(
            <CartItemsProvider>
                <TestingComponent/>
            </CartItemsProvider>
        )

        fireEvent.click(screen.getByTestId("test-button"));

        const productName = screen.getByText("Men's Ski Jacket");
  
        expect(productName).toBeInTheDocument();
    });
});
