import React from 'react';
import './External.css';
import External from './External.module.css';
export default function Internal_css() {
    return (
        <div className="div">
            <h1 className={External.heading}>Hello</h1>
            <h1 className="heading">Usman</h1>
        </div>
    )
}



    // import React from 'react';
    // import Inline from './component/css in react js/Internal_css';
    // export default function app() {
    //     return (
    //         <>
    //             <Inline/>
    //         </>
    //     )
    // }
    