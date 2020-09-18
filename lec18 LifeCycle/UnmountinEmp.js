import React, { Component,Fragment } from 'react';


export default class Employee extends Component {
    constructor(){
        super();
        this.state={
            name : "Usman",
            empid: 132
        }
        console.log("Employee B Constructor Calling");
    }

    UNSAFE_componentWillMount(){
        console.log("Employee B UNSAFE_componentWillMount Calling");
    }
    componentWillUnmount(){
        console.log("Employee B componentWillUnmount Calling");
    }
    render() {
        console.log("Employee B render Calling");
        return (
            <Fragment>
                <h1>Hello EmployeeB</h1>
                
            </Fragment>
        )
    }
}
 