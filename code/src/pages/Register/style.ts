import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid white;
  border-radius: 1em;
  width: 35vw;
  height: 70vh;
  margin: 1em auto;
  padding: 1em;

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