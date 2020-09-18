import React from 'react';
import {MyContext} from './Type';
export default class ComC extends React.Component {
    static contextType = MyContext;
    render(){
        const {mname,lname}=this.context;
        console.log(this.context)
        return (
            <div>
                <h2>Middel name is :{mname}</h2>
                <h2>Last name is :{lname}</h2>
            </div>
        )
    } 
}    