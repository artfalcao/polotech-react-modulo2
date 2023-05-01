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
              <Route 
                path="/listPage" 
                element={<Suspense fallback={<div>Carregando...</div>}><ListPage /></Suspense>}/>
              <Route 
                path='/' 
                element={<Suspense fallback={<div>Carregando...</div>}><Register /></Suspense>}/>
            </Routes>
          </Router>
      </ActivityProvider>
    </>
  );
}

export default App;
