import React from 'react';
import { FaCheck } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

import { ListItens } from './styles';

export default class List extends React.Component {
    constructor(props) {
        super(props);
    }

    handleRemoveItem(e) {
        e.currentTarget.parentNode.remove();
    };
    
    render() {
        return (
            <ListItens>
                <div className='listItens'>
                    <input value={this.props.text} readOnly />
                    <button className='removeButton' onClick={this.handleRemoveItem}><FaTrash /></button>
                </div>
            </ListItens>
        );
    }
}