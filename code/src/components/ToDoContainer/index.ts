import styled from "styled-components";
import { colors } from "../../GlobalStyle";

export const ToDoContainer = styled.div`
  height: 70vh;
  width: 100%;
  margin: 1em auto;
  padding-top: 1em;
  padding-left: 1em;
  border: none;
  border-radius: 16px;
  background-color: ${colors.primary};
  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: .5em;

  overflow-y: scroll;
  
  ::-webkit-scrollbar {
    width: 12px;               /* width of the entire scrollbar */
  }

  ::-webkit-scrollbar-track {
    background: #F4F2FF;        /* color of the tracking area */
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${colors.primary};    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
    border: 3px solid ${colors.lightSecondary};  /* creates padding around scroll thumb */
  }
`

export default ToDoContainer;