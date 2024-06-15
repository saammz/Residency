import { BrowserRouter as Router, Routes, Route, Navigate, } from 'react-router-dom';

import './App.css';
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/Dashboard/Dashboard';
import { useEffect, useState } from 'react';
import { auth } from '../firebase';
const App=()=> {
  const [user, setUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    })
  }, []);
  return (
      <Router>
        <Routes>
          <Route path="/" element={ user ? <Navigate to="/dashboard" /> : <Landing />} />
          <Route path="/login" element={ user ? <Navigate to="/dashboard" /> : <Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <ToastContainer/>
      </Router>   
  )
}

export default App
