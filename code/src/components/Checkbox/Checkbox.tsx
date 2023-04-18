import { CheckboxContainer, StyledCheckbox } from './StyledCheckbox';
import { CheckboxProps } from './Checkbox.type';


const Checkbox = ({ checked, handleOnClick } : CheckboxProps) => {

  return (
    <CheckboxContainer>
      <StyledCheckbox checked={checked} onClick={handleOnClick}/>
    </CheckboxContainer>
  )
}

export default Checkbox;