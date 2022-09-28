import styles from './UserCard.module.css'

const UserCard = ({ user }) => {
  return (
    <article className={styles.userCard}>
      <header >
        <h3>{user.name}</h3>
        <h3>{user.email}</h3>
      </header>
      <div>
        <button>
          Update User
        </button>
        <button>
          Delete User
        </button>
      </div>
    </article>
  );
}

export default UserCard;