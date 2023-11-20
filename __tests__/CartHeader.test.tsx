import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import { mockTheme } from "./mocks/theme";
import { cartItems } from "./mocks/cartData";
import CartHeader from "@/app/components/cart/cartHeader/CartHeader";

describe("CartHeader", () => {
  it("should display the number of cart items", async () => {

    render(<ThemeProvider theme={mockTheme}>
        <CartHeader totalCount={cartItems.length}/>
      </ThemeProvider>)

    const heading = screen.getByText('Cart (2)');
  
    expect(heading).toBeInTheDocument()
  });

  it("should display (0) as number of cart items", async () => {

    render(<ThemeProvider theme={mockTheme}>
        <CartHeader totalCount={0}/>
      </ThemeProvider>)

    const heading = screen.getByText('Cart (0)');
  
    expect(heading).toBeInTheDocument()
  });

});
