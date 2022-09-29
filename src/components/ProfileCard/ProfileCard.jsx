import styles from './ProfileCard.module.css'
import { useDispatch, useSelector } from "react-redux";
import { deleteProfile } from '../../actions/auth';
import { useNavigate } from 'react-router-dom';

const ProfileCard = ({ profile }) => {
  const { user, profiles } = useSelector(state => state.authReducer)
  const dispatch = useDispatch()

  const handleDeleteProfile = (id) => {
    dispatch(deleteProfile(id))
  }

  const navigate = useNavigate()

  const navigateToUpdateOtherUser = () => {
    navigate('/updateuser', { state: { profile } })
  }

  return (
    <article className={styles.profileCard}>
      <header >
        <h3>{profile.name}</h3>
        <h3>{profile.email}</h3>
      </header>
      <div>
        <button onClick={()=> navigateToUpdateOtherUser()}>
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