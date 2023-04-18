import styled from "styled-components";

export const StyledContainer = styled.div`
  height: 70vh;
  width: 400px;
  margin: 1em auto;
  padding-top: 1em;
  padding-left: 1em;
  border: none;
  border-radius: 16px;
  background-color: #D5CCFF;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 24px;
  
  h2 {
    color: #2B1887;
    font-size: 2em;
  }
`

export const InputContainer = styled.div`
  margin: 0 auto;
  width: 500px;
  height: 80px;
  background-color: #1C1C1C;
  border: none;
  border-radius: 16px;
  
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledInput = styled.input`
  width: 400px;
  height: 24px;
  margin: 0 auto;
  padding-top: 1em;
  padding-left: 1em;
  border: none;
  border-radius: 16px;
  background-color: #4F4F4F;
  color: #DCDCDC;
  font-size: 1.2em;
  vertical-align: middle;


  ::placeholder,
  ::-webkit-input-placeholder {
    color: #DCDCDC;
    
  }
  :-ms-input-placeholder {
    color: #DCDCDC;

  }
`