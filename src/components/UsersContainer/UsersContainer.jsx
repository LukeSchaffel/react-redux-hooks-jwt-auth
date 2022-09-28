import UserCard from "../UserCard/UserCard";
import { useDispatch, useSelector } from "react-redux";
import styles from './UsersContainer.module.css'


const UsersContainer = () => {

  const { user, users } = useSelector(state => state.authReducer)

  return ( 
  <div className={styles.container}>
    {users ? users.map((user, idx) => {
      return  <UserCard user={user} key={user.id}/>
    })
    : null
    } 
  </div> 
  );
}
 
export default UsersContainer;