import React from 'react'
import useCustomHook from './CustomHook';
export default function Employee() {
    const [salary,incrementSalary]= useCustomHook();
    return (
        <div>
            <h1>Employee Detail</h1>
            <h3>Salary : {salary}</h3>
            <button onClick={incrementSalary}>Increment</button>
        </div>
    )
}
  