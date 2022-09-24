import React,{ useState } from "react";
import ActualyMetersDisplay from "./ActualyMetersDiplay";


const DisplayMetriCubi = () => {
    const[meters, setMeters] = useState(null)

    
    let handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch("http://127.0.0.1:8000/metricubi/", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify({'nr_placuta':e.target.nr_placuta.value})
        },
        )
        const jsonResponse = await response.json()
        setMeters(jsonResponse)
    
    }
    
    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="placuta autoturismului" name="nr_placuta"/>
                <input type="submit" value="Fetch Data"/>
            </form>
        {meters && <ActualyMetersDisplay meters={meters}/>}

        </div>
     );
}
 
export default DisplayMetriCubi;