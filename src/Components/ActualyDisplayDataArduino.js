import React from "react";

const ActualyDisplayDataArduino = ({ arduinodata }) => {
    return ( 
        <div className='firstClass'>
            {arduinodata.map((data) => (
                <div key={data.id}>
                <h1>Datele sunt:</h1>
                <h1>{data.dist1}</h1>
                <h1>{data.dist2}</h1>
                <h1>{data.dist3}</h1>
                <h1>{data.dist4}</h1>
                </div>
            ))}
       </div> 
       
     );
}
 
export default ActualyDisplayDataArduino;