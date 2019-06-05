import * as React from 'react'

interface IHelloProps {
    name: string;
};

export default class Hello extends React.Component<IHelloProps, IHelloProps> {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name
        };
        this.updateName = this.updateName.bind(this);
    }
    updateName(){
        const actualName = this.props.name;
        const alternateName = 'Mr. Neo';
        const newName = this.state.name === actualName ? alternateName : actualName;

        this.setState({name: newName});
    }

    render() {
        return <div>
            Hello {this.state.name}!
            <button onClick={this.updateName}>
                Click me!
            </button>
        </div>
    }
}
