import React, { useState } from 'react';
import { StyledInput, InputContainer } from './StyledInput';
import { InputProps } from './Input.types';

const Input = ({ handleActivityKeyPress }: InputProps) => {
  const [newActivityLabel, setNewActivityLabel] = useState("");

  const handleActivityChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setNewActivityLabel(e.target.value);
  }


  return (
    <InputContainer>
      <StyledInput 
      placeholder="Digite sua atividade"
      value={newActivityLabel}
      onChange={handleActivityChange}
      onKeyPress={handleActivityKeyPress}
      />
    </InputContainer>
  )
}

export default Input