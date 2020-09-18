import React, { Component } from 'react'

export default class file extends Component {
    render() {
        return (
            <div>
                <h2>Employee</h2>
                <h4>{this.props.children}</h4>
            </div>
        )
    }
}
 