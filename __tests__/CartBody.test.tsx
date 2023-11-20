import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import { mockTheme } from "./mocks/theme";
import CartBody from "@/app/components/cart/cartBody/CartBody";

describe("CartBody", () => {

  it("should display the message: There are no items in your cart yet.", async () => {

    render(<ThemeProvider theme={mockTheme}>
        <CartBody cartItems={[]}/>
      </ThemeProvider>)

    const heading = screen.getByText('There are no items in your cart yet.');
  
    expect(heading).toBeInTheDocument()
  });

});
