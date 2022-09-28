import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import './App.css';
import * as authService from './services/authService'
import NavBar from './components/NavBar/NavBar';
import Landing from './pages/Landing/Landing';
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Dashboard from './pages/Dashboard/Dashboard';
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from './actions/auth';



function App() {
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  const handleGetAllUsers = () => {
    dispatch(getAllUsers())
  }

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

      <button onClick={() => handleGetAllUsers()}>
        get all users
      </button>
    </div>
  );
}

export default App;
