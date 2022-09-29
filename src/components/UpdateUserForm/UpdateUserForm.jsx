import { useState } from "react";
import { Link } from "react-router-dom";
import styles from './UpdateUserForm.module.css'

const UpdateUserForm = ({ userToUpdate }) => {
  const [formData, setFormData] = useState({
    username: userToUpdate.name
  })

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = () => {
    return
  }

  const isFormInvalid = () => {
    return !(username.length > 0 && userToUpdate.name !== formData.username)
  }

  const { username } = formData

  return (
    <div>
       <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.container}
    >
      <div className={styles.inputContainer}>
        <label htmlFor="username" className={styles.label}>
          New Username:
        </label>
        <input
          type="username"
          autoComplete="off"
          id="username"
          value={username}
          name="username"
          onChange={handleChange}
        />
      </div>
      
      <div className={styles.inputContainer}>
        <button disabled={isFormInvalid()} className={styles.button}>
          Change Username
        </button>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    </form>

    </div>
  );
}

export default UpdateUserForm;