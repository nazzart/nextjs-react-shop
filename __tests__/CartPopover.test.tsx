import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import { mockTheme } from "./mocks/theme";
import userEvent from "@testing-library/user-event";
import { cartItems } from "./mocks/cartData";
import CartPopover from "@/app/components/cart-popover/CartPopover";

// Mock useRouter:
const pushMock = jest.fn();

// Mock the close function
const onClose = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: pushMock,
    };
  },
}));

// Mock hook
jest.mock("src/app/hooks/useCart", () => ({
  __esModule: true,
  default: () => ({ cartItems: cartItems }),
}));

let container: HTMLElement;
const renderComponent = () => {
  return render(
    <ThemeProvider theme={mockTheme}>
      <CartPopover onClose={onClose} />
    </ThemeProvider>
  );
};

describe("CartPopover", () => {
  beforeEach(() => {
    ({ container } = renderComponent());
  });

  it("should close the popover when clicking outside of it", async () => {
    await userEvent.click(document.body);
    await waitFor(() => expect(onClose).toHaveBeenCalledWith(true));
  });

  it("should redirect to the cart page when clicking the button and close the popover", async () => {
    const button = screen.getByRole("button", { name: "Next step" });
    await userEvent.click(button);

    await waitFor(() => {
      expect(onClose).toHaveBeenCalledWith(true);
      expect(pushMock).toHaveBeenCalledWith("/cart");
    });
  });
});
