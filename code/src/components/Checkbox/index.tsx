import { StyledComponent } from "styled-components";
import { ComponentProps } from "react";
import { CheckboxContainer, HiddenCheckbox, StyledCheckbox } from './StyledCheckbox';

export type CheckboxProps = {
  checked: boolean;
};

type Props = ComponentProps<StyledComponent<"input", {}>>;

const Checkbox = ({ checked, ...props }: Props) => {
  return (
    <CheckboxContainer>
      <HiddenCheckbox {...props} type="checkbox" />
      <StyledCheckbox checked={checked} />
    </CheckboxContainer>
  );
};

export default Checkbox;