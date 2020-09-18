import React from 'react';
import Emp from './Employee';
import Widget from './Widget';
import Error from './Boundary';
import logo from '../../a.jpg';
class App extends React.Component{
    render(){
        return(
            <>
                <h1> App Component</h1>
                <Error><Emp/></Error>
                <Error><Widget logo={logo}/></Error>
            </>
        )
    }
}

export default App; 