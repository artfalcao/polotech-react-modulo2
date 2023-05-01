import { createGlobalStyle } from "styled-components";

export const colors = {
  primary: "#2B1887",
  secondary: "#D5CCFF",
  lightSecondary: "#F4F2FF",
  white: "#FFFFFF",
  black: "#000",
  lightGrey: "#F5F5F5",
  darkGrey: "#34495E",
  lightBlack: "#191825"
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
  }
`;

