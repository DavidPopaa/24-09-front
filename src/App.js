import Axios from 'axios'
import React ,{useEffect, useState} from "react"
import Home from './Components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Map from './Components/Map'
import LoginPage from './Components/LoginPage'
import Header from './Components/Header'
import { AuthProvider } from './Context/AuthContext'
import Register from './Components/RegisterPage'
import RegisterRoute from './Routes/RegisterRoute'
import AuthentificatedRoute from './Routes/AuthentificatedRoute'


function App() {
   const [dataaa,setData] = useState(null)

   useEffect(() => {
    Axios.get("http://localhost:8000/serial/")
    .then(res => {setData(res.data)})
    .catch(err => console.log(err))
   },[])

    return (         
          <div className="App">
            <Router>
            <AuthProvider>
            <Header />         
            <Routes>
            <Route element={<AuthentificatedRoute>{dataaa && <Home data={dataaa}/>}</AuthentificatedRoute>} path="/data"/>
            <Route element={<RegisterRoute><Register /></RegisterRoute>} path="/register"/>
            <Route element={<AuthentificatedRoute><Map/></AuthentificatedRoute>} path="/map"/>            
            <Route element={<LoginPage />} path="/login"/>
            </Routes>
            </AuthProvider>
            </Router>
          </div>
    )  
}

export default App;         