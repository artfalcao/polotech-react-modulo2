import styled from "styled-components";
import { colors } from "../../GlobalStyle";

export const Input = styled.input`
  width: 90%;
  height: 20px;
  margin: 0 auto;
  padding: 1em;
  border: none;
  border-radius: 16px;
  background-color: ${colors.lightGrey};
  color: #000;
  font-size: 1.2em;


  ::placeholder,
  ::-webkit-input-placeholder {
    color: #000;
  }
  :-ms-input-placeholder {
    color: #000;
  }
`

export default Input;