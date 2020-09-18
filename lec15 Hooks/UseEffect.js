import React,{useState, useEffect} from 'react'

export default function UseEffect() {
    const [state ,setState]= useState(0);
    useEffect(()=>{
        if(state !== 0){
            alert("Clicked Me\t" +state);
        }
    })
    return(
        <>
            <h1>Usman Javed</h1>
            <button onClick={()=>{
                setState(state+1)
            }}>Increment {state}</button>
        </>
    )
}
