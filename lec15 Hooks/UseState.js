import React,{Fragment,useState} from 'react';


export default function UseState() {
    const [count, setstate] = useState(0);
    const ChangeState=()=>{
        setstate(count+1);
    }
    return (
        <Fragment>
            <h1>{count}</h1>
            <button onClick={ChangeState}>Increment</button>
        </Fragment>
    )
}
 
// app.js
// import React,{Fragment } from 'react';
// import Hoook from './component/Hooks/UseState';
// export default function app() {
//     return (
//         <>
//             <Hoook/>
//         </>
//     )
// }