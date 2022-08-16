import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";

const PrivateRoute = ({children}) => {
    let {user} = useContext(AuthContext)
    return(
        !user ? null : children
    )
} 

export default PrivateRoute;