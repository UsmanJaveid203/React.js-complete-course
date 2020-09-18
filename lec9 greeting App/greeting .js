import React,{Fragment, Component } from 'react';
import './greeting.css';
let result;
const cssStyle={}
var time = new Date();
time= time.getHours();
if(time>= 1 && time <12){
  result="Good Morning";
  cssStyle.color='green';
}else if(time>= 12 && time <19){
  result="Good Afternoon";
  cssStyle.color='orange';
}else{
  result="Good Evening";
  cssStyle.color='black';
}

class greeting extends Component {
    render() {
      return (
        <>
          <h1 style={{backgroundColor:'white',width:'400px', height:'50px'}}>
            Hello Sir <span style={cssStyle}>{result}</span>
          </h1>
        </>
      )
    }
  }
  
  

export default greeting;