import React, { Component,Fragment } from 'react';



export default class UnMounting extends Component {
    constructor(){
        super();
        this.state={
            name : "Usman",
            empid: 132
        }
        console.log("Employee A Constructor Calling");
    }
    UNSAFE_componentWillMount(){
        console.log("Employee A UNSAFE_componentWillMount Calling");
    }
    componentWillUnmount(){
        console.log("Employee A componentWillUnmount Calling");
    }
    render() {
        console.log("Employee A render Calling");
        return (
            <Fragment>
                <h1>Hello EmployeeA</h1>
                
            </Fragment>
        )
    }
} 
