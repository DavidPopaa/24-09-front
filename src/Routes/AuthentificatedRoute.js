import { useContext } from "react";
import AuthContext from "../Context/AuthContext";

const AuthentificatedRoute = ({children}) => {
    let {user} = useContext(AuthContext)
  return (
    !user ? null : children
  )
}

export default AuthentificatedRoute