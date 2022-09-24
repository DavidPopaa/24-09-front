import React from "react";

const ActualyMetersDisplay = ({ meters }) => {
    return ( 
        <div>
            {meters.map((item) => (
                <div key={item.id}>
                    <h1>{item.array_de_metri_cubi} metricubi</h1>
                </div>
            ))}
        </div>

     );
}
 
export default ActualyMetersDisplay;