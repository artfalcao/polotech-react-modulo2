import React, { useState } from 'react';
import { StyledContainer, InputContainer, StyledInput } from './StyledContainer';
import Activity from '../Activity/Activity';
import { ActivityList } from '../Activity/StyledActivity';
import { IActivity } from '../Activity/Activity.types';
import { nanoid } from 'nanoid';
import Spacer from '../Spacer/Spacer';


const Container = () => {
  const [activitys, setActivitys] = useState<IActivity[]>([]);
  const [newActivityLabel, setNewActivityLabel] = useState("");

  const handleActivityChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setNewActivityLabel(e.target.value);
  }

  const addActivity = (label : string) => {
    const id = nanoid();
    setActivitys((prevActivitys) => [...prevActivitys, { id, label, checked:false }]);
  }

  const handleActivityKeyPress = (e : React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && newActivityLabel !== "") {
      addActivity(newActivityLabel);
      setNewActivityLabel("");
    }
  }

  return (
    <>
      <StyledContainer>
        <h2>To-Do</h2>
        <ActivityList>
          {activitys.map((eachActivity) => (
            <>
              <Activity checked={eachActivity.checked} label={eachActivity.label} id={eachActivity.id} key={eachActivity.id}/>
              <Spacer height='1'/>
            </>
          ))}
        </ActivityList>
      </StyledContainer>
      <InputContainer>
        <StyledInput 
          placeholder="Digite sua nova atividade"
          value={newActivityLabel}
          onChange={handleActivityChange}
          onKeyPress={handleActivityKeyPress}
        />
      </InputContainer>
    </>
  )
}

export default Container;