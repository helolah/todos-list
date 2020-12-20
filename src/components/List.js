import React from 'react';
import index from '../css/index.css';

export default class List extends React.Component {
    constructor(props) {
        super(props);

        this.handleScratch = this.handleScratch.bind();
    }

    handleScratch(e) {
        console.log('teste');
    }

    render() {
        return (
            <div>
                <ul>
                    <li>{this.props.text}</li>
                    <button type='button' onClick={this.handleScratch}>Feito</button>
                </ul>
            </div>
        );
    }
}