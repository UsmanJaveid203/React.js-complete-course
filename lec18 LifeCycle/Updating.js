import React, { Component,Fragment } from 'react';
import EmployeeB from './UpdatingEmp';
/* 
    1=>constructor() for initializing state and bind event handaler
    2=>getDerivedStateFromProps()
    3=>render() use when we use class com
    4=>componentDilMount() for calling API and AJAX
*/

export default class Mounting extends Component { 
    constructor(){
        super();
        this.state={
            name : "Usman",
            empid: 132
        }
        console.log("Employee A Constructor Calling");
    }

    changAll=()=>{
        let i=this.state.empid;
        this.setState({
            empid:i+1
        })
    }

    static getDerivedStateFromProps(props, state){
        console.log("Employee A getDrivedStateFromState Calling");
        return null;
    }
    render() {
        console.log("Employee A render Calling");
        return (
            <Fragment>
                <h1>Hello Employee</h1>
                <h2>Employee A {this.state.empid}</h2>
                <button onClick={this.changAll}>Update empid</button>
                <EmployeeB iid={this.state.empid}/>
            </Fragment>
        )
    }
}
 