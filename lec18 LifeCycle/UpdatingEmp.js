import React, { Component,Fragment } from 'react'
/* 
    1=>constructor() for initializing state and bind event handaler
    2=>getDrivedStateFromState()
    3=>render() use when we use class com
    4=>componentDilMount() for calling API and AJAX
*/
export default class UpdatingEmp extends Component {
    constructor(props){
        super(props);
        this.state={
            name : "Usman",
            empidb: this.props.iid
        }
        console.log("EmployeeB Constructor Calling");
    }

    static getDerivedStateFromProps(props, state){
        console.log("EmployeeB getDrivedStateFromState Calling");
        console.log(props,state);
        if(props.iid !== state.empidb){
            return{empidb:props.iid}
        }
        return null;
    } 
 
    shouldComponentUpdate(nextprop,nextstate){
        console.log("EmployeeB shouldComponentUpdate Calling");
        console.log(nextprop,nextstate);
        return true;
    }

    getSnapshotBeforeUpdate(preprop,prestate){
        console.log("EmployeeB getSnapshotBeforeUpdate Calling");
        
        return null;
    }

    componentDidUpdate(preprop,prestate,snapshot){
        console.log("EmployeeB componentDidUpdate Calling");
        
        console.log(snapshot);
    }
    render() {
        console.log("EmployeeB render Calling");
        return (
            <Fragment>
                <h1>Hello EmployeeB</h1>
                <h2>{this.state.empidb}</h2>
            </Fragment>
        )
    }
}
