import React, { useState } from 'react';
import { StyledActivity } from './StyledActivity';
import Checkbox from '../Checkbox/Checkbox';
import Spacer from '../Spacer/Spacer';
import { IActivity } from './Activity.types';

const Activity = ({ id, label, checked } : IActivity) => {

  const [isChecked, setIsChecked] = useState(checked);

  const toggleChecked = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsChecked(!isChecked);
  }

  return (
    <StyledActivity>
      <Checkbox checked={isChecked} handleOnClick={toggleChecked}/>
      <Spacer width="1"/>
      <p>{label}</p>
    </StyledActivity>
  )
}

export default Activity