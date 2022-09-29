import { useDispatch, useSelector } from "react-redux";
import { getAllProfiles, updateUser } from '../../actions/auth';
import ProfilesContainer from "../../components/ProfilesContainer/ProfilesContainer";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Dashboard = () => {
  const [hidden, setHidden] = useState(true)
  const { user, profiles } = useSelector(state => state.authReducer)
  const dispatch = useDispatch()

  const handleGetAllProfiles = () => {
    dispatch(getAllProfiles())
  }
  const isAdmin = user.role === 'ADMIN' ? true : false

  useEffect(() => {
    if (isAdmin) {
      handleGetAllProfiles()
    }
  }, [])


  const navigate = useNavigate()

  const navigateToUpdateUser = () => {
    navigate('/updateuser')
  }


  return (
    <>
      <article>
        <header>
          <h1>Welcome {user.name} </h1>
          <button onClick={() => navigateToUpdateUser()}>Change Username</button>
          <button>Delete Account</button>
        </header>
        <div>
          <p>
            My Info: Email: {user.email}
          </p>
        </div>
      </article>
      {isAdmin ?
        <div>
          <button onClick={() => setHidden(!hidden)}>{hidden ? "Show Users" : "Hide Users"}</button>
          {!hidden ?
            <ProfilesContainer />
            : null
          }
        </div>
        : null}
    </>
  );
}


export default Dashboard;