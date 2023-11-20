import {
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import { mockTheme } from "./mocks/theme";
import CartItem from "@/app/components/cart/cartItem/CartItem";
import { cartItems } from "./mocks/cartData";
import userEvent from "@testing-library/user-event";

const pushMock = jest.fn();
jest.mock("src/app/hooks/useRemoveItem", () => ({
  __esModule: true,
  default: () => ({ removeItem: pushMock }),
}));

describe("CartItem", () => {
  xit("should remove ", async () => {
    render(
      <ThemeProvider theme={mockTheme}>
        <CartItem item={cartItems[0]} />
      </ThemeProvider>
    );

    const button = screen.getByTestId("remove-btn");
    const itemName = screen.getByText(cartItems[0].name);
    expect(itemName).toBeInTheDocument();

    await userEvent.click(button);

    await waitFor(() => {
      expect(pushMock).toHaveBeenCalledWith(cartItems[0]);
      expect(itemName).not.toBeInTheDocument();
    });
  });
});
