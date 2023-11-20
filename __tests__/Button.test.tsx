import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import { mockTheme } from "./mocks/theme";
import Button from "@/app/components/buttons/Button";

describe("Button", () => {

  it("should receive the primary color", () => {

    render(<ThemeProvider theme={mockTheme}>
        <Button color="primary">Hello</Button>
      </ThemeProvider>)

    const element = screen.getByText('Hello');
    const styles = getComputedStyle(element);

    expect(styles.backgroundColor).toBe('rgb(0, 150, 255)');
  });

  it("should be displayed as large button", () => {

    render(<ThemeProvider theme={mockTheme}>
        <Button color="primary" size="large">Hello</Button>
      </ThemeProvider>)

    const element = screen.getByText('Hello');
    const styles = getComputedStyle(element);

    expect(styles.minWidth).toBe('300px');
  });

});
