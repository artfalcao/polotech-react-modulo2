import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

//components
import Container from '../components/ToDoContainer/Container';
import ToDoContainer from '../components/ToDoContainer';
import Checkbox from '../components/Checkbox';
import ActivityCard from '../components/Activity';
import Spacer from '../components/Spacer';
import Input from '../components/Input';

//types
import { IActivity } from '../components/Activity/Activity.types';


const ListPage = () => {
  const [activitys, setActivitys] = useState<IActivity[]>([]);
  const [newActivityLabel, setNewActivityLabel] = useState("");

  useEffect(() => {
    console.log(activitys);
  }, [activitys])

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

  const updateActivityCompletion = (activityId: string, checked: boolean) => {
    setActivitys((activitys) =>
      activitys.map((activity) => {
        if (activity.id === activityId) return { ...activity, checked };
        return activity;
      })
    );
  };

  const handleActivityCompleteChange = (event: React.ChangeEvent<HTMLInputElement>, eachActivity : IActivity) => {
      updateActivityCompletion(eachActivity.id, event.target.checked);
    };

  return (
    <Container>
      {/* <Search /> */}
      {/* <Spacer /> */}
      <ToDoContainer>
        <h2>To-Do</h2>
        <Spacer height='1'/>
          {activitys.map((eachActivity) => (
            <>
            <ActivityCard key={eachActivity.id} checked={eachActivity.checked} >
              <Checkbox 
                  key={eachActivity.id}
                  checked={eachActivity.checked}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    handleActivityCompleteChange(event, eachActivity)
                  }
                />
              <Spacer width="1"/>
              {eachActivity.label}
            </ActivityCard>
            <Spacer height='1'/>
            </>
          ))}
      </ToDoContainer>
      <Input 
        placeholder="Digite sua nova atividade"
        value={newActivityLabel}
        onChange={handleActivityChange}
        onKeyPress={handleActivityKeyPress}/>
    </Container>
  )
}

export default ListPage