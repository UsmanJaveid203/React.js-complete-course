import React,{Component} from 'react';
import EmployeeB from './EmployeeB'

class Employee extends Component{
//   constructor(props){
//     super(props);
//     this.state={
//       hasError:false,
//       planets:{}
//     }
//   };
 
//    componentDidMount(){
//     fetch("https://api.randomuser.me/")
//     .then(res=>res.json())
//     .then(res=>this.setState({planets:res}))
//     .catch(()=>this.setState({hasError:true}));
//   }
  
  render(){
    
    return(
      <>
        {/* <h1>Employee From Class Component</h1>
        <h3>Results : </h3>
        <div>{JSON.stringify(this.state.planets)}</div> */}
        <EmployeeB/>
      </>
    )
  }
}

export default Employee;

