import React,{useState, useEffect} from 'react'
import Axios from 'axios'
import DisplayIstoricMetriCubi from './DisplayIstoricMetriCubi'


export default function IstoricMetriCubi() {
  const [list,setList] = useState(null)



  //  useEffect(() => {
  //   Axios.get("http://127.0.0.1:8000/metricubi/listmetricubi/")
  //   .then(res => {setList(res.data)})
  //   .then(console.log(list))
  //   .catch(err => console.log(err))
  //  },[])
   
  useEffect(() => {
    fetch("http://127.0.0.1:8000/metricubi/listmetricubi/")
    .then(res => {
      return res.json()
    })
    .then(data => {
      setList(data)
    })
    .then(console.log("ok"))
    .catch(err => console.log(err))
   },[])


  return (
   
    <div>
        {list && <DisplayIstoricMetriCubi list={list}/>}
    </div>
  )
}


// fetch("http://127.0.0.1:8000/accounts/books/", {
//             method: "GET",
//             headers: {"Content-Type": "application/json",
//             Authorization: `Token ${this.props.token}`},
//             body: JSON.stringify(this.state.credentials)
//         })
//         .then(data => data.json())
//         .then(data => this.setState({books: data}))
//         .catch(err => console.log(err))