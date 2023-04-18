import styled from "styled-components";
import { CheckboxProps } from "./Checkbox.type";

export const CheckboxContainer = styled.div`
  width: 1.5em;
  height: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 3px solid #2B1887;
`

export const StyledCheckbox = styled.div<CheckboxProps>`
  width: 1em;
  height: 1em;
  border: none;
  border-radius: 50%;
  background-color: ${(props) => props.checked ? "#2B1887" : "#efefef"}; 
  cursor: pointer;
`;