import React,{useState} from 'react';
let color ="red";
export default function Event_rjs() {
    const[ss,setstate]=useState(color);
    const bgChange=()=>{
        setstate(color="blue")
    }

    const backSett=()=>{
        setstate(color="red")
    }
    return (
        <div  style={{backgroundColor:ss,width:"500px",height:"500px"}}>
            <button onDoubleClick={backSett} onClick={bgChange}>Click me</button>
        </div>
    )
}
