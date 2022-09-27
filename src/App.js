import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import './App.css';
import * as authService from './services/authService'
import NavBar from './components/NavBar/NavBar';
import Landing from './pages/Landing/Landing';
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import { useDispatch, useSelector } from "react-redux";



function App() {

  // authService.register('me', 'me@gmail.com', 'you')

  // authService.login('me@gmail.com', 'you')  
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
      </Routes>
    </div>
  );
}

export default App;
