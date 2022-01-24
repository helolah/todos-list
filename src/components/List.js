import React from 'react';

import { ListItens, Item } from './styles';

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
                <ListItens>
                    <Item>{this.props.text}</Item>
                </ListItens>
            </div>
        );
    }
}