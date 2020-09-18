import React, { PureComponent } from 'react'

export default class Purecom extends PureComponent {
    render() {
        console.log("PureComponent")
        return (
            <div>
                <h1>PureComponent Name:{this.props.na}</h1>
            </div>
        )
    }
}
