import React,{useState} from 'react';

export default function Form() {
    const[values,setValue]=useState({
        name:"",
        pass:"",
        email:""
    });
    const ChangeValue=(event)=>{
        let key=event.target.name;
        let val=event.target.value;
        setValue((preVal)=>{
            console.log(preVal);
            return{
                ...preVal,
                [key]:val
            }
        })
    }

    
    return (
        <div>
        <h1>Name :{values.name}</h1>
                <h1>Password:{values.pass}</h1>
                 <h1>Gmail:{values.gmail}</h1>
                 <input type="text"  name="name" placeholder="Enter Your Name" value={values.name} onChange={ChangeValue}/><br/><br/>
                 <input type="pass"  name="pass" placeholder="Enter Your Password" value={values.pass} onChange={ChangeValue}/><br/><br/>
                 <input type="email"  name="email" placeholder="Enter Your Gmail" value={values.gmail} onChange={ChangeValue}/><br/><br/>
            <button >Submit</button>
        </div>
    )
}