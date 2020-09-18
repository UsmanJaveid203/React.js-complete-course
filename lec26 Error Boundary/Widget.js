import React from 'react';

class Widget extends React.Component{
    render(){
        if(this.props.logo ===''){
            throw new Error("Not Found");
        }
        return(
            <>
                <h1>Profile Image </h1>
                <img width="200px" src={this.props.logo}  alt="Pic"/>
            </>
        )
    }
}

export default Widget; 