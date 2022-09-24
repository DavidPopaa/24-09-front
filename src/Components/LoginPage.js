import React, {useContext} from 'react'
import AuthContext from '../Context/AuthContext'
import '../css/project.css'

const LoginPage = () => {
  let {loginUser} = useContext(AuthContext)
 
 


 
  return (
    // <div>
    //     <form onSubmit={loginUser}>
    //          <input type="text" name="username" placeholder="username"/>
    //          <input type="password" name="password" placeholder="password"/>
    //          <input type="submit" value="Login"/>
    //     </form> 
    // </div>
  <div>
   <div className='login-page'id='login-form'>
    <div className='form-box'>
    <div id='formbox1'>
      <h1>LOGIN</h1>
    </div>
      <form id='login' className='input-group-login' onSubmit={loginUser}>
        <input type='text'className='input-field'placeholder='Username' name="username" required />
		    <input type='password'className='input-field'placeholder='Password' name="password" required/>
		    <input type='checkbox'className='check-box'/><span>Remember Password</span>
		    <button type='submit'className='submit-btn'>Log in</button>
		  </form>
    </div>
   </div>
   </div>
  )
}

export default LoginPage