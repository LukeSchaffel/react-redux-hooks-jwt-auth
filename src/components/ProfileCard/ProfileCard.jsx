import styles from './ProfileCard.module.css'
import { useDispatch, useSelector } from "react-redux";
import { deleteProfile } from '../../actions/auth';

const ProfileCard = ({ profile }) => {
  const { user, profiles } = useSelector(state => state.authReducer)
  const dispatch = useDispatch()

  const handleDeleteProfile = (id) => {
    console.log(id);
    dispatch(deleteProfile(id))

  }

  return (
    <article className={styles.profileCard}>
      <header >
        <h3>{profile.name}</h3>
        <h3>{profile.email}</h3>
      </header>
      <div>
        <button>
          Update profile
        </button>
        <button onClick={()=> handleDeleteProfile(profile.id)}>
          Delete profile
        </button>
      </div>
    </article>
  );
}

export default ProfileCard;