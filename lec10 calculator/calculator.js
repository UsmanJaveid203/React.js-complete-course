function add(n1,n2){
    return (n1+n2);
}

function sub(n1,n2){
    return (n1-n2);
}

function multipal(n1,n2){
    return (n1*n2);
}

function divide(n1,n2){
    return ((n1/n2).toFixed(2));
}

export default add;

export {sub,multipal,divide};



// App.js File Code
// import React,{Fragment } from 'react';
// import * as Calculator from './component/calculator/calculator';

// export default function app() {
//     return (
//         <>
//             <h1>Simple Calculator</h1>
//             <ol>
//                 <li>Sum ={Calculator.default(4,2)}</li>
//                 <li>Subtract ={Calculator.sub(4,2)}</li>
//                 <li>Multiplication ={Calculator.multipal(4,2)}</li>
//                 <li>Division ={Calculator.divide(4,2)}</li>
//             </ol>
//         </>
//     )
// }