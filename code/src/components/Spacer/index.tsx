import React from 'react';
import { SpacerProps } from './Spacer.type';
import { StyledSpacer } from './StyledSpacer';

const Spacer = ({ height, width } : SpacerProps) => {
  return (
    <StyledSpacer height={height} width={width}/>
  )
}

export default Spacer