import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/auth"
import { useCallback } from 'react';

const NavBar = ({handleLogout}) => {
  const dispatch = useDispatch()
  
  const { isLoggedIn, user } = useSelector(state => state.authReducer);


  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);


  return (
    <>
      {user ?
        <nav>
          <ul>
            <li>Welcome, {user.name}</li>
            <li><Link to="/profiles">Profiles</Link></li>
            <li><Link to="" onClick={logOut}>LOG OUT</Link></li>
            <li><Link to="/changePassword">Change Password</Link></li>
            <li><Link to='/dashboard'>Dash Board</Link></li>
          </ul>
        </nav>
      :
        <nav>
          <ul>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
