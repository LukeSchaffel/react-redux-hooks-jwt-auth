import { useDispatch, useSelector } from "react-redux";
import { getAllProfiles } from '../../actions/auth';
import UsersContainer from "../../components/ProfilesContainer/ProfilesContainer";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [hidden, setHidden] = useState(true)
  const { user, profiles } = useSelector(state => state.authReducer)
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  const handleGetAllProfiles = () => {
    dispatch(getAllProfiles())
  }
  const isAdmin = user.role === 'ADMIN' ? true : false

  useEffect(() => {
    if (isAdmin) {
      handleGetAllProfiles()
    }
  }, [])
console.log(profiles);

  return (
    <>
      <article>
        <header>
          <h1>Welcome {user.name} </h1>
          <button>Change Name</button>
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
            <UsersContainer />
            : null
          }
        </div>
        : null}
    </>
  );
}


export default Dashboard;