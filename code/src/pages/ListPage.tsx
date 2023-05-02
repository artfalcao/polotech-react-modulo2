import React, { useState, useMemo, useCallback } from 'react';
import { useActivity } from '../context/activity.context';

//components
import Container from '../components/ToDoContainer/Container';
import ToDoContainer from '../components/ToDoContainer';
import Checkbox from '../components/Checkbox';
import ActivityCard from '../components/Activity';
import Spacer from '../components/Spacer';
import Input from '../components/Input';
import Header from '../components/Header';
import { Column } from '../components/Column/index';
import SearchTerm from '../components/SearchTerm';

//types
import { IActivity } from '../components/Activity/Activity.types';
import Dataless from '../components/Dataless';


export type TStatus = {
  all : number,
  checked: number,
  unchecked: number
}

const ListPage = () => {
  const {  activitys, addActivity, updateActivityCompletion, searchTerm, setSearchTerm, activitysFilter } = useActivity();
  const [newActivityLabel1, setNewActivityLabel1] = useState("");
  const [newActivityLabel2, setNewActivityLabel2] = useState("");


  const handleActivityChange1 = useCallback(
    (e : React.ChangeEvent<HTMLInputElement>) => {
      setNewActivityLabel1(e.target.value);
    }, []
  ) 

  const handleActivityChange2 = useCallback(
    (e : React.ChangeEvent<HTMLInputElement>) => {
      setNewActivityLabel2(e.target.value);
    }, []
  ) 

  const handleActivityKeyPress1 = useCallback(
    (e : React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && newActivityLabel1 !== "") {
        addActivity(newActivityLabel1);
        setNewActivityLabel1("");
      }
    }, [newActivityLabel1]
  ) 

  const handleActivityKeyPress2 = useCallback(
    (e : React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && newActivityLabel2 !== "") {
        addActivity(newActivityLabel2);
        setNewActivityLabel2("");
      }
    }, [newActivityLabel2]
  ) 

  const handleActivityCompleteChange = (event: React.ChangeEvent<HTMLInputElement>, eachActivity : IActivity) => {
      updateActivityCompletion(eachActivity.id, event.target.checked);
  };

  const Status = useMemo(() => {
    const data = activitys.reduce(
      (previous, item) => {
        if (item.checked === true) {
          return {
            complete: previous.complete + 1,
            progress: previous.progress,
          };
        } else {
          return {
            complete: previous.complete,
            progress: previous.progress + 1,
          };
        }
      },
      { complete: 0, progress: 0 }
    );

    const status : TStatus = {
      all: activitys.length,
      checked: data.complete,
      unchecked: data.progress
    }

    return status;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activitys]);

  return (
    <Container>
      <Column>
        <Header status={Status}/>
      </Column>

      <Column>
        <SearchTerm />
        <Spacer height='.5'/>
        <ToDoContainer>
        
            {activitys.length === 0 
              ? (<Dataless />) 
              : activitysFilter.map((eachActivity) => (
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
                <p>{eachActivity.label}</p>
              </ActivityCard>
              <Spacer height='1'/>
              </>
            ))}
        </ToDoContainer>
        <Input 
          placeholder="Digite sua nova atividade"
          value={newActivityLabel1}
          onChange={handleActivityChange1}
          onKeyPress={handleActivityKeyPress1}
        />

        <Spacer height='.5' />

        <Input 
          placeholder="Digite sua nova atividade"
          value={newActivityLabel2}
          onChange={handleActivityChange2}
          onKeyPress={handleActivityKeyPress2}
        />
      </Column>
      
      {/* <Search /> */}
      {/* <Spacer /> */}
      
    </Container>
  )
}

export default ListPage;