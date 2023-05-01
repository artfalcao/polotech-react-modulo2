import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { IActivity } from "../components/Activity/Activity.types";
import { nanoid } from "nanoid";

interface IActivityContext {
  activitys: IActivity[];
  addActivity: (label: string) => void;
  updateActivityCompletion: (activityId: string, checked: boolean) => void;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  activitysFilter: IActivity[];
}

const ActivityContext = createContext<IActivityContext>({} as IActivityContext);

interface IProps {
  children: React.ReactNode;
}

const ActivityProvider = ({ children }: IProps) => {
  const [activitys, setActivitys] = useState<IActivity[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activitysFilter, setActivitysFilter] = useState<IActivity[]>([]);

  // to catch activitys from LocalStoreage
  useEffect(() => {
    const fetchActivitys = () => {
      const activitysString = localStorage.getItem("activitys");
      if (activitysString) {
        const activitysArray = JSON.parse(activitysString);
        setActivitys(activitysArray);
      }
    };

    fetchActivitys();
  }, []);

  useEffect(() => {
    const listActivity = activitys.filter((eachActivity) =>
    eachActivity.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setActivitysFilter(listActivity);
  }, [searchTerm, activitys]);

  const addActivity = (label : string) => {
    const id = nanoid();
    const currentActivity: IActivity = {id, label: label, checked: false};
    const updatedActivitys = [...activitys, currentActivity];
    setActivitys(updatedActivitys);
    saveActivitys(updatedActivitys);
  }

  const saveActivitys = (updatedActivitys: IActivity[]) => {
    const activitysString = JSON.stringify(updatedActivitys);
    localStorage.setItem("activitys", activitysString);
  };

  const updateActivityCompletion = (activityId: string, checked: boolean) => {
    setActivitys((activitys) =>
      activitys.map((activity) => {
        if (activity.id === activityId) return { ...activity, checked };
        return activity;
      })
    );
  };

  return (
    <ActivityContext.Provider
      value={{
        activitys,
        addActivity,
        updateActivityCompletion,
        activitysFilter,
        searchTerm,
        setSearchTerm
      }} >
      {children}
    </ActivityContext.Provider>
  );
};

const useActivity = () => useContext(ActivityContext);

export { ActivityProvider, useActivity };