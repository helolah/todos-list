import React from 'react';

import { Item } from './styles';

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
                    <Item>{this.props.text}</Item>
                </ul>
            </div>
        );
    }
}