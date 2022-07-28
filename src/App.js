import Axios from 'axios'
import React ,{useEffect, useState} from "react"
import Home from './Home'
import Login from './Components/Login'
import Books from './Components/Books'

function App() {
   const [dataaa,setData] = useState(null)

   useEffect(() => {
    Axios.get("http://localhost:8000")
    .then(res => {setData(res.data)})
    .catch(err => console.log(err))
   },[])
   
   const [token, setToken] = useState("")
  
   const userLogin = (tokennn) => {
        setToken(tokennn)
       }

    return <div className="App">
            {dataaa && <Home data={dataaa}/>}
            <br></br>
            <Login userLogin={userLogin}/>
            <Books token={token}/>
           </div>
                            
}

export default App;
