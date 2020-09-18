import React from 'react';
import ComB from './ComB';
const MyContext1 = React.createContext();
const MyContext2 = React.createContext();
export default function main() {
    return (
        <div>
            <h1>My First Name is Usman</h1>
            <MyContext1.Provider value="Bin">
                <MyContext2.Provider value="Javed">
                    <ComB/>
                </MyContext2.Provider>
            </MyContext1.Provider>
        </div>
    )
}  
 
export {MyContext1,MyContext2};
 