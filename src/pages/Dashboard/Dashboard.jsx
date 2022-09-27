import { useSelector } from "react-redux";

const Dashboard = () => {
  const state = useSelector(state => state)
  const { user } = useSelector(state => state.authReducer)

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