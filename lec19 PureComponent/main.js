import React, { Component } from 'react'
import Rag from './Ragular';
import Pure from './PureCom';
export default class main extends Component {
    constructor(){
        super();
        this.state={
            name:"Usman"
        }
        console.log("1");
    }
 
    componentDidMount(){
        console.log("2");
        setInterval(()=>{
            this.setState({
                name:"Usman Javed"
            })
        },3000)
    }
    
    render() {
        console.log("3");
        return (
            <div>
                <h1>Parent Component :{this.state.name}</h1>
                <Rag na={this.state.name}/>
                <Pure na={this.state.name}/>
            </div>
        )
    }
}
