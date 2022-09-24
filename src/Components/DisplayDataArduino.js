import React, { useState } from "react";
import ActualyDisplayDataArduino from "./ActualyDisplayDataArduino";

const DisplayDataArduino = () => {
    const [arduinodata, setArduinoData] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch("http://127.0.0.1:8000/serial/", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify({'com_number':e.target.setcom.value})
        },
        )
        const jsonResponse = await response.json()
        setArduinoData(jsonResponse)
    }
    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="set COM of Device" name="setcom"/>
                <input type="submit" value="SET PORT"/>
                {arduinodata && < ActualyDisplayDataArduino arduinodata={arduinodata}/>}
            </form>
        </div>
     );
}
 
export default DisplayDataArduino;