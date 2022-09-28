import styles from './ProfileCard.module.css'

const ProfileCard = ({ profile }) => {
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
        <button>
          Delete profile
        </button>
      </div>
    </article>
  );
}

export default ProfileCard;