import styles from './Landing.module.css'
import { useDispatch, useSelector } from "react-redux";

const Landing = () => {
  const state = useSelector(state => state)
  const { user } = useSelector(state => state.authReducer)

  return (
    <main className={styles.container}>
      <h1>hello, </h1>
    </main>
  )
}

export default Landing
