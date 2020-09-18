import React, { Component,Fragment } from 'react';
import EmployeeB from './EmployeeB';
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
            name : "Usman"
        } 
        console.log("Constructor Calling");
    }
    componentDidMount(){
        console.log("componentDidMount Calling");
    }

    static getDerivedStateFromProps(props, state){
        console.log("Employee A getDrivedStateFromState Calling");
        return null;
    }

    render() {
        console.log("render Calling");
        return (
            <Fragment>
                <h1>Hello Employee</h1>
                <EmployeeB/>
            </Fragment>
        )
    }
}
