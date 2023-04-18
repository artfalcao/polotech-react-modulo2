import styled from "styled-components";
import { SpacerProps } from "./Spacer.type";

export const StyledSpacer = styled.div<SpacerProps>`
  width: ${(props) => props.width ? `${props.width}em` : "0px"};
  height: ${(props) => props.height ? `${props.height}em` : "0px"};
`