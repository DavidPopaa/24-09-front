import React,{useContext} from "react";
import "../css/project.css";
import AuthContext from '../Context/AuthContext';

const Registerrrr = () => {
  let {registerUser} = useContext(AuthContext)
    return (  
        
        <div>
        <div className='login-page'id='login-form'>
         <div className='form-box'>
         <div id='formbox2'>
      <h1>REGISTER</h1>
    </div>
           <form id='register' className='input-group-register' onSubmit={registerUser}>
                         <input type='text'className='input-field'placeholder='Username' name="username" required/>
                         {/* <input type='text'className='input-field'placeholder='Last Name ' required/> */}
                         {/* <input type='email'className='input-field'placeholder='Email Id' required/> */}
                         <input type='password'className='input-field'placeholder='Password' name="password" required/>
                         {/* <input type='password'className='input-field'placeholder='Confirm Password' required/> */}
                         <input type='checkbox'className='check-box'/><span>I agree to the terms and conditions</span>
                     <button type='submit'className='submit-btn'>Register</button>
             </form>
         </div>
        </div>
        </div>
        
        
    );
}
 
export default Registerrrr;