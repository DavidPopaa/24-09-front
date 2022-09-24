import React,{useState, useEffect} from 'react'
import DisplayNotOkMetriCubi from './DisplayNotOkMetriCubi'
import Axios from 'axios'

export default function NotOkMetriCubi() {
    const[list,setList] = useState(null)

    useEffect(() => {
        fetch("http://127.0.0.1:8000/metricubi/notokmetricubi/")
        .then(res => {
          return res.json()
        })
        .then(data => {
          setList(data)
        })
        .then(console.log("ok"))
        .catch(err => console.log(err))
       },[])
    
//      useEffect(() => {
//     Axios.get("http://127.0.0.1:8000/metricubi/notokmetricubi/")
//     .then(res => {setList(res.data)})
//     .then(console.log(list))
//     .catch(err => console.log(err))
//    },[])

  return (
    <div>
        {list && <DisplayNotOkMetriCubi list={list}/>}
    </div>
  )
}
