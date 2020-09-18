import React from 'react';
import ComB from './ComB';
import {Provider} from './Type';
export default class main extends React.Component {
    render(){
        const data={
            mname:"Bin",
            lname:"Javed"
        }
        return (
            <div>
                <h1>My First Name is Usman</h1>
                <Provider value={data}>
                    <ComB/>
                </Provider>
            </div>
        )
    }   
}
  