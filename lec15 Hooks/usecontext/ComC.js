import React,{useContext} from 'react';
import {MyContext1,MyContext2} from './main';
export default function ComC() {
    const mname=useContext(MyContext1);
    const lname=useContext(MyContext2);
    return (
        <div>
            <h2>My Middel Name : {mname}</h2>
            <h2>My Lasr Name : {lname}</h2>
        </div>
    ) 
}
     