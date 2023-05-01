import styled from "styled-components";
import { colors } from "../../GlobalStyle";

export const StyledHeader = styled.header`
  width: 20vw;
  height: 100vh;
  background-color: ${colors.primary};
  padding-left: 1em;

  h2 {
    color: ${colors.lightSecondary};
    font-size: 2.5em;
    margin-bottom: 2em;
  }

  p {
    font-size: 1.5em;
    font-weight: bold;
    color: ${colors.secondary};
    margin-bottom: .5em;
  }
`;