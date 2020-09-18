import React from 'react';
import ComB from './ComB';
const MyContext = React.createContext();
export default function main() {
    return (
        <div>
            <h1>My First Name is Usman</h1>
            <MyContext.Provider value="Javed">
                <ComB/>
            </MyContext.Provider>
        </div>
    )
}

export {MyContext};
