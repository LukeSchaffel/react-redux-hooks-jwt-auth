import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import './App.css';
import * as authService from './services/authService'
import NavBar from './components/NavBar/NavBar';
import Landing from './pages/Landing/Landing';

function App() {

  // authService.register('me', 'me@gmail.com', 'you')

  
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/'
        element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
