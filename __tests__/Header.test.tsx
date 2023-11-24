import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import Header from "@/app/components/header/Header";
import { mockTheme } from "./mocks/theme";
import userEvent from "@testing-library/user-event";
import { cartItems } from "./mocks/cartData";
import { Product } from "@/models/product.interface";

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
let mockReturn: Product[] = [];
jest.mock("src/app/hooks/useCart", () => ({
  __esModule: true,
  default: () => ({ cartItems: mockReturn }),
}));

const renderComponent = () => {
  return render(
    <ThemeProvider theme={mockTheme}>
      <Header />
    </ThemeProvider>
  );
};

describe("Header", () => {
  beforeEach(() => {
    mockReturn = [];
  });

  it("should render the heading", () => {
    renderComponent();

    const heading = screen.getByRole("heading", {
      name: /We sell stuff/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("should render lazy loaded and empty CartPopover component", async () => {
    renderComponent();

    const icon = screen.getByTestId("icon-wrapper");
    await userEvent.click(icon);

    await waitFor(() =>
      expect(
        screen.getByText("There are no items in your cart yet.")
      ).toBeInTheDocument()
    );
  });

  it("should toggle the popover", async () => {
    renderComponent();

    const icon = screen.getByTestId("icon-wrapper");
    await userEvent.click(icon);

    await waitFor(() => {
      expect(screen.queryByTestId("cart-popover")).toBeInTheDocument();
    });

    await userEvent.click(icon);

    await waitFor(() => {
      expect(screen.queryByTestId("cart-popover")).not.toBeInTheDocument();
    });
  });

  it("should display the badge with a value of 2", async () => {
    mockReturn = cartItems;

    renderComponent();

    const badge = screen.getByTestId("badge-total-count");

    await waitFor(() => {
      expect(badge).toHaveTextContent("2");
    });
  });
});
