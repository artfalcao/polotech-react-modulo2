import { GlobalStyle } from './GlobalStyle';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import { ActivityProvider } from './context/activity.context';
import ListPage from './pages/ListPage';
import Register from './pages/Register';

const App = () => {
  return (
    <>
      <ActivityProvider>
        <GlobalStyle />
          <Router>
            <Routes>
              <Route path="/listPage" element={<ListPage />}/>
              <Route path='/' element={<Register />}/>
            </Routes>
          </Router>
      </ActivityProvider>
    </>
  );
}

export default App;
