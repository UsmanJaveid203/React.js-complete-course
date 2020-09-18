// import React, { Component } from 'react'

// export default class Form extends Component {
//     constructor(){
//         super();
//         this.state={
//             name:"",
//             pass:"",
//             gmail:""
//         }
//     }

//     ChangeValue=(event)=>{
//         let key= event.target.name;
//         let value= event.target.value;
//          console.log(key);
//          console.log(value);
//         this.setState({
//             [key]:value
//         })
//     }
    
//     render() {
//         return (
//             <>
//                 <h1>Name :{this.state.name}</h1>
//                 <h1>Password:{this.state.pass}</h1>
//                 <h1>Gmail:{this.state.gmail}</h1>
//                 <input type="text"  name="name" placeholder="Enter Your Name" value={this.state.name} onChange={this.ChangeValue}/><br/><br/>
//                 <input type="pass"  name="pass" placeholder="Enter Your Password" value={this.state.pass} onChange={this.ChangeValue}/><br/><br/>
//                 <input type="email"  name="email" placeholder="Enter Your Gmail" value={this.state.gmail} onChange={this.ChangeValue}/><br/><br/>
//             </>
//         )
//     }
// }




import React, { Component } from 'react'

export default class Form extends Component {
    constructor(){
        super();
        this.state={
            name:'',
            pass:'',
            email:''
        }
        this.inputfield=React.createRef()
        
    }
     
    changeValue=(event)=>{
        let key= event.target.name;
        let value= event.target.value;
        this.setState({
            [key]:value
        })
    }
    render() {
        console.log(this.inputfield.current.name);
        return (
            <>
                <h1>Name :{this.state.name}</h1>
                <h1>Password:{this.state.pass}</h1>
                <h1>Gmail:{this.state.email}</h1>
                <input type="text"  name="name" placeholder="Enter Your Name" ref={this.inputfield} /><br/><br/>
                <input type="pass"  name="pass" placeholder="Enter Your Password" ref={this.inputfield}/><br/><br/>
                <input type="text"  name="email" placeholder="Enter Your email" ref={this.inputfield}/><br/><br/>
            </>
        )
    }
}


