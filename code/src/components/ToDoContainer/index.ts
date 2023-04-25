import styled from "styled-components";

export const ToDoContainer = styled.div`
  height: 70vh;
  width: 100%;
  margin: 1em auto;
  padding-top: 1em;
  padding-left: 1em;
  border: none;
  border-radius: 16px;
  background-color: #D5CCFF;
  
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
    background-color: #2B1887;    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
    border: 3px solid #F4F2FF;  /* creates padding around scroll thumb */
  }
`

export default ToDoContainer;