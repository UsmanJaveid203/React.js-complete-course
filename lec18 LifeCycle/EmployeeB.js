import React, { Component,Fragment } from 'react'
/* 
    1=>constructor() for initializing state and bind event handaler
    2=>getDerivedStateFromProps()
    3=>render() use when we use class com
    4=>componentDilMount() for calling API and AJAX
*/ 
export default class EmployeeB extends Component {
    constructor(){
        super();
        this.state={
            name : "Usman"
        }
        console.log("EmployeeB Constructor Calling");
    }
    componentDidMount(){
        console.log(" EmployeeB componentDidMount Calling");
    }

    static getDerivedStateFromProps(props, state){
        console.log("EmployeeB getDrivedStateFromState Calling");
        return null;
    }
    render() {
        console.log("EmployeeB render Calling");
        return (
            <Fragment>
                <h1>Hello EmployeeB</h1>
            </Fragment>
        )
    }
}
