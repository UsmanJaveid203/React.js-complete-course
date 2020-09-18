import React,{Fragment,useState} from 'react';

let time = new Date().toLocaleTimeString();
export default function Challenge() {
    const [ctime, setstate] = useState(time);
    setInterval(() => {
        time = new Date().toLocaleTimeString();
        setstate(time);
    }, 1000);
    return (
        <Fragment>
            <h1>{ctime}</h1>
        </Fragment>
    )
}