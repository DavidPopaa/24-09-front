import React, {useContext} from 'react'
import AuthContext from '../Context/AuthContext'

const Register = () => {
    let {registerUser} = useContext(AuthContext)

  return (
    <form onSubmit={registerUser}>
        <input type="text" name="username" placeholder="username"/>
        <input type="text" name="password" placeholder="password"/>
        <input type="submit" value="Register"/>
    </form>
  )
}

export default Register