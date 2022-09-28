import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from '../../actions/auth';

const Dashboard = () => {
  const { user } = useSelector(state => state.authReducer)
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  const handleGetAllUsers = () => {
    dispatch(getAllUsers())
  }

  console.log(user);
  return ( 

   <article>
    <header>
      <h1>Welcome {user.name} </h1>
    </header>
    <div>
      <p>
        My Info: Email: {user.email}
      </p>
    </div>
   </article>

   );
}
 
export default Dashboard;