import React from 'react';
import { Link } from "react-router-dom";
export default function Context() {
    
    return (
        <>
            <h1>Contact Page</h1>
            <Link to="/contact/child">go to child</Link>
        </>
    )
}
 