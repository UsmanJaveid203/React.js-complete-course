import React from 'react'

function PureCom(props) {
    console.log("PureCom");
    return (
        
        <div>
            
            <h1>Name : {props.na}</h1>
        </div>
    )
}

export default React.memo(PureCom); 