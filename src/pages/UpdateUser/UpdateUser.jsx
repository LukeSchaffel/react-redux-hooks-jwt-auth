import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';

const UpdateUser = ({ profile }) => {
  const location = useLocation()
  const { user, profiles } = useSelector(state => state.authReducer)
  const [userToUpdate, setUserToUpdate] = useState(
    location.state ? location.state.profile : user
  )


  console.log('logged in user', user);
  console.log('user to update:', userToUpdate);
  return ( 
  <div>
    <h1>this is the update user page</h1>
  </div> 
  );
}
 
export default UpdateUser;