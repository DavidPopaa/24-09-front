import React, { useContext, useState }  from "react";

const mainContext = React.createContext()

export function useMainFunction(){
    return useContext(mainContext)
}

export function ContextProvider({ children }){
    const [eventData, setEventData] = useState([])
    const [selectedEvent, setSelectedEvent] = useState(null)
    const [reRenderMarkers, setReReMarkets] = useState(null)

    const value = {
        eventData,
        setEventData,
        selectedEvent,
        setSelectedEvent,
        reRenderMarkers,
        setReReMarkets
    }
    return(
        <mainContext.Provider value={value}>
             {children}
        </mainContext.Provider>
    )
    
}


