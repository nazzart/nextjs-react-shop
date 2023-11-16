"use client";

import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#0096FF",
    secondary: "#06B49A",
    lightGray: "#999999",
    white: "#FFFFFF"
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;