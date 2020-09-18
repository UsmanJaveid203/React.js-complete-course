import React, { Component } from 'react'

export default class Ragular extends Component {
    render() {
        console.log("Ragular")
        return (
            <div>
                <h1>Ragular Component Name:{this.props.na}</h1>
            </div>
        )
    }
}
