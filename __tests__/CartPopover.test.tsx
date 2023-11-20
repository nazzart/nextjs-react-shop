import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import { mockTheme } from "./mocks/theme";
import CartPopover from "@/app/components/cart-popover/CartPopover";
import userEvent from "@testing-library/user-event";
import { cartItems } from "./mocks/cartData";

// Mock useRouter:
const pushMock = jest.fn();
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: pushMock,
    };
  },
}));

// Mock hook
jest.mock('src/app/hooks/useCart', () => ({
    __esModule: true,
    default: () => ({ cartItems: cartItems }),
}));

let container: HTMLElement;
const renderComponent = () => {
    return render(<ThemeProvider theme={mockTheme}>
        <CartPopover />
      </ThemeProvider>);
  };

describe("CartPopover", () => {

    beforeEach(() => {
        ({container} = renderComponent());
    });

  it("should toggle the popover", async () => {
    const icon = screen.getByTestId("icon-wrapper");
    userEvent.click(icon);

    await waitFor(() => expect(container.firstChild).toHaveClass("active"));

    userEvent.click(icon);

    await waitFor(() => expect(container.firstChild).not.toHaveClass("active"));
  });

  it("should close the popover when clicking outside of it", async () => {
    const icon = screen.getByTestId("icon-wrapper");
    userEvent.click(icon);

    await waitFor(() => expect(container.firstChild).toHaveClass("active"));

    userEvent.click(document.body);

    await waitFor(() => expect(container.firstChild).not.toHaveClass("active"));
  });

  it("should redirect to the cart page when clicking the button and close the popover", async () => {
    const icon = screen.getByTestId("icon-wrapper");
    userEvent.click(icon);

    await waitFor(() => { 
    
        expect(container.firstChild).toHaveClass("active")
        const button = screen.getByRole('button', { name: 'Next step' })
        userEvent.click(button);
    });
    

    await waitFor(() => { 
        expect(container.firstChild).not.toHaveClass("active")
        expect(pushMock).toHaveBeenCalledWith('/cart')
    });
  });
});
