import * as React from 'react'

import Hello from './Hello';

export default class Main extends React.Component{
    constructor(props){ 
        super(props);
        console.log("Constructor");
    }
    componentDidMount(){
        console.log("Mounted");
    }
    render() {
        console.log("Rendering")
        return (
                <Hello name='Hello'/>
        )
    }
}