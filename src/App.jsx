import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';

const Client = React.lazy(() => import('./pages/Client'))
const Login = React.lazy(() => import('./pages/Login'))
const Admin = React.lazy(() => import('./pages/Admin'))

function App() {
  return (
    <BrowserRouter>
      <React.Suspense>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path="/" element={<Client />} />
            <Route path='/admin' element={<Admin />} />
          </Route>
          <Route path='/login' element={<Login />} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
