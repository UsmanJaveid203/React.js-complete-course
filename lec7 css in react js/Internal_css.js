import React from 'react'
export default function Internal_css() {
    return (
        <div style={Styling}>
            Hello
        </div>
    )
}

const Styling={
    backgroundColor:'blue',
    width:'300px',height:'300px',
    textAlign:'center',
    borderBottomLeftRadius:'10px',
    borderTopRightRadius:'10px',
    marginLeft:'5px',
    paddingTop:'30px'}

    // import React from 'react';
    // import Inline from './component/css in react js/Internal_css';
    // export default function app() {
    //     return (
    //         <>
    //             <Inline/>
    //         </>
    //     )
    // }
    