import styled from "styled-components";
import { colors } from "../../GlobalStyle";

export const Container = styled.div`
  border: 1px solid white;
  border-radius: 1em;
  width: 35vw;
  height: 70vh;
  padding: 1em;
  background-color: ${colors.primary};

  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: center;
`;

export const Title = styled.h1`
  color: #F4F2FF;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5em;
`;

export const Input = styled.input`
  width: 90%;
  height: 3em;
  font-size: 1.2em;
  padding-left: 1em;
  border: none;
  border-radius: 2em;
  background-color: #F4F2FF;
`;

export const SubmitButton = styled.button`
  width: 60%;
  height: 3em;
  font-size: 1.2em;
  font-weight: 600;
  margin: 1em auto;
  border: none;
  border-radius: 2em;
  background-color: #D5CCFF;
  color: #2B1887;
  cursor: pointer;
`;

export const RightContainer = styled.div`
  width: 40vw;
  height: 70vh;

  

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Wrapper = styled.div`
  width: 95vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  
  /* border: 1px solid black; */
`;