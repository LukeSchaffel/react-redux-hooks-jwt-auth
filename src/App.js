import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import './App.css';
import * as authService from './services/authService'
import NavBar from './components/NavBar/NavBar';
import Landing from './pages/Landing/Landing';
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Dashboard from './pages/Dashboard/Dashboard';
import { useDispatch, useSelector } from "react-redux";



function App() {

  const state = useSelector(state => state)

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/'
        element={<Landing />} />
        <Route path='/login'
        element={<Login />} />
        <Route path='/signup'
        element={<Signup />} />
        <Route path='/dashboard'
        element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
