// Prospective Component as prop
import React from 'react';

const SuperCharger = ProspectiveComponent => {
    return (props) => {
        return(
           <div style={{backgroundColor:"gray"}}>
                <ProspectiveComponent />
           </div> 
        )
    }
}

export default SuperCharger;