import { Suspense, lazy } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import { ActivityProvider } from './context/activity.context';
import Loading from './components/Loading';
const ListPage = lazy(() => import('./pages/ListPage'));
const Register = lazy(() => import('./pages/Register/index'));

const App = () => {
  return (
    <>
      <ActivityProvider>
        <GlobalStyle />
        <Suspense fallback={<Loading />}></Suspense>
          <Router>
            <Routes>
              <Route 
                path="/listPage" 
                element={<Suspense fallback={<Loading />}><ListPage /></Suspense>}/>
              <Route 
                path='/' 
                element={<Suspense fallback={<Loading />}><Register /></Suspense>}/>
            </Routes>
          </Router>
      </ActivityProvider>
    </>
  );
}

export default App;
