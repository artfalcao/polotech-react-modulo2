import { GlobalStyle } from './GlobalStyle'; 
import { ActivityProvider } from './context/activity.context';
import ListPage from './pages/ListPage';

const App = () => {
  return (
    <>
      <ActivityProvider>
        <GlobalStyle />
        <ListPage />
      </ActivityProvider>
    </>
  );
}

export default App;
