import React from 'react';
import { useParams } from "react-router-dom";
export default function Contact() {
    const {name}=useParams();
    return (
        <div>
            <h1>I am {name} Component of Contact Page</h1>
        </div>
    )
}
 