export const mockTheme = {
    colors: {
      black: "#000000",
      primary: "#0096FF",
      secondary: "#06B49A",
      lightGray: "#DDDDDD",
      mediumGray: "#999999",
      white: "#FFFFFF",
    },
    fonts: ["sans-serif", "Roboto"],
    fontSizes: {
      small: "0.9em",
      medium: "2em",
      large: "3em",
    },
    breakpoints: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px"
    },
    up: (breakpoint: string, vertical = false) =>
      `@media (min-${
        vertical ? "height" : "width"
      }: calc(${breakpoint} + 0.02px))`,
    down: (breakpoint: string, vertical = false) =>
      `@media (max-${vertical ? "height" : "width"}: ${breakpoint})`,
    between: (breakpointMin: string, breakpointMax: string, vertical = false) =>
      `@media (max-${vertical ? "height" : "width"}: ${breakpointMax}) and (min-${
        vertical ? "height" : "width"
      }: calc(${breakpointMin} + 0.02px))`,
  };