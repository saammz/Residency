import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

import './App.css';
import Intro from './components/Intro/Intro';
const App=()=> {
  return (
      <Router>
      <Intro/>
      <Routes>
        {/* <Route> */}
      </Routes>
      </Router>    
  )
}

export default App
