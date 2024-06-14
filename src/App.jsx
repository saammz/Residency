import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

import './App.css';
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/DashHome';
const App=()=> {
  return (
      <Router>
      <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      </Router>    
  )
}

export default App
