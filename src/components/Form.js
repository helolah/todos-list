import React from 'react';
import List from './List'

import { FormContent, Input, Button } from './styles';

export default class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listItems: [],
            newListItem: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleSubmit(e) {
        this.setState(
            { listItems: [...this.state.listItems, { text: this.state.newListItem }] }
        );

        this.setState(
            { newListItem: '' }
        );

        e.preventDefault();
    }

    handleTextChange(e) {
        this.setState(
            { newListItem: e.target.value }
        );
    }

    render() {
        return (
            <div>
                <FormContent onSubmit={this.handleSubmit}>
                    <input value={this.state.newListItem} onChange={this.handleTextChange} placeholder="Ex.: Levar o cachorro para passear" required/>
                    <button type='submit'>ADICIONAR</button>
                </FormContent>

                { this.state.listItems.map((item, index) => {
                    return <List text={item.text} key={index} />
                })}
            </div>
        )
    }
}