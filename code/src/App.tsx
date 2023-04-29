import { Suspense, lazy } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import { ActivityProvider } from './context/activity.context';

const ListPage = lazy(() => import('./pages/ListPage'));
const Register = lazy(() => import('./pages/Register/index'));

const App = () => {
  return (
    <>
      <ActivityProvider>
        <GlobalStyle />
        <Suspense fallback={<div>Carregando...</div>}></Suspense>
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
