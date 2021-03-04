import React from 'react';
import styles from './login.module.css';
import { loginUser, useAuthState, useAuthDispatch } from '../../Context'

function Login(props) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useAuthDispatch() //get the dispatch method from the useDispatch custom hook


  const handleLogin = async (e) => {
    e.preventDefault()
    let payload = { name, email }
    try {
      let response = await loginUser(dispatch, payload) //loginUser action makes the request and handles all the neccessary state changes
      if (!response.user) return
      props.history.push('/dashboard') //navigate to dashboard on success
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.container}>
      <div className={{ width: 200 }}>
        <h1>Login Page</h1>

        <form >
          <div className={styles.loginForm}>
            <div className={styles.loginFormItem}>
              <label htmlFor="email">Username</label>
              <input type="text" id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className={styles.loginFormItem}>
              <label htmlFor="password">Password</label>
              <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <button onClick={handleLogin} >login</button>
        </form>
      </div>
    </div>
  )
}

export default Login;