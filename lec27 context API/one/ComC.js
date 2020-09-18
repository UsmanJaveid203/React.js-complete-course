import React from 'react';
import {MyContext} from './main';
export default function ComC() {
    return (
        <div>
            <MyContext.Consumer>
                {(data)=>{
                    return <>
                        <h1>My last Name = {data}</h1>
                        </>
                    }
                }
            </MyContext.Consumer>
            
        </div>
    )
}
