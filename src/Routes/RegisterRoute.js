import {useContext} from 'react'
import AuthContext from "../Context/AuthContext";

const RegisterRoute = ({children}) => {

    let {user} = useContext(AuthContext)
    return (      
        user ? <h1>Esti deja autentificat</h1> : children             
    )
}

export default RegisterRoute