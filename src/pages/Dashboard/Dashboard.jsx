import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from '../../actions/auth';
import UsersContainer from "../../components/UsersContainer/UsersContainer";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [hidden, setHidden] = useState(true)
  const { user, users } = useSelector(state => state.authReducer)
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  const handleGetAllUsers = () => {
    dispatch(getAllUsers())
  }
  const isAdmin = user.role === 'ADMIN' ? true : false

  useEffect(() => {
    if (isAdmin) {
      handleGetAllUsers()
    }
  }, [])


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