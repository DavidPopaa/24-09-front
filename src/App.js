// import Axios from 'axios'
import React  from "react"
// import Home from './Components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Map from './Components/Map'
import LoginPage from './Components/LoginPage'
import Header from './Components/Header'
import { AuthProvider } from './Context/AuthContext'
import Register from './Components/RegisterPage'
import RegisterRoute from './Routes/RegisterRoute'
import AuthentificatedRoute from './Routes/AuthentificatedRoute'
import DisplayMetriCubi from './Components/DisplayMetriCubi'
import DisplayDataArduino from './Components/DisplayDataArduino'
import "./css/project.css"
// import Register from "./Components/RegisterPage"
import Registerrrr from "./Components/Registerrrr"
import IstoricMetriCubi from "./Components/IstoricMetriCubi"
import NotOkMetriCubi from "./Components/NotOkMetriCubi"

function App() {
  //  const [dataaa,setData] = useState(null)

  //  useEffect(() => {
  //   Axios.get("http://localhost:8000/serial/")
  //   .then(res => {setData(res.data)})
  //   .catch(err => console.log(err))
  //  },[])

    return (         
          <div className="full-page">
            <Router>
            <AuthProvider>
            <Header />         
            <Routes>
            {/* <Route element={<AuthentificatedRoute>{dataaa && <Home data={dataaa}/>}</AuthentificatedRoute>} path="/data"/> */}
            <Route element={<AuthentificatedRoute><DisplayDataArduino /></AuthentificatedRoute>} path="/data"/>
            <Route element={<RegisterRoute><Register /></RegisterRoute>} path="/register"/>
            <Route element={<AuthentificatedRoute><Map/></AuthentificatedRoute>} path="/map"/>
            <Route element={<IstoricMetriCubi />} path="/list"/>   
            <Route element={<NotOkMetriCubi />} path="/notok"/>          
            <Route element={<LoginPage />} path="/login"/>
            <Route element={<Registerrrr />} path="/registerr"/>

            <Route element={<AuthentificatedRoute><DisplayMetriCubi /></AuthentificatedRoute>} path="/metricubi"/>
            </Routes>
            </AuthProvider>
            </Router>
          </div>
    )  
}

export default App;