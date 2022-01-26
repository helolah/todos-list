import React from 'react';
import { FaCheck } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

import { ListItens } from './styles';

export default class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            readOnly: true,
            inputValue: this.props.text,
            hiddenEdit: false,
            hiddenSave: true,
            checked: false,
            disabled: false,
            disabledCheckbox: false,
        };

        this.handleEditItem = this.handleEditItem.bind(this);
        this.handleEditedItem = this.handleEditedItem.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleIsChecked = this.handleIsChecked.bind(this);
    }

    handleRemoveItem(e) {
        e.currentTarget.parentNode.parentNode.remove();
    };

    handleEditItem() {
        this.itemInput.focus();
        this.setState({
            readOnly: false,
            hiddenEdit: true,
            hiddenSave: false,
            disabledCheckbox: !this.state.disabledCheckbox,
        });
        
        this.disabledCheckbox.classList.add('disabledCheckbox');
    }
    
    handleTextChange(e) {
        this.setState({
            inputValue: e.target.value
        });
    }

    handleEditedItem(e) {
        this.setState({
            readOnly: true,
            hiddenEdit: false,
            hiddenSave: true,
            disabledCheckbox: !this.state.disabledCheckbox,
        });

        this.disabledCheckbox.classList.remove('disabledCheckbox');

        if ( this.state.inputValue.length <= 0 ) {
            e.currentTarget.parentNode.parentNode.remove();
        }
    }

    handleIsChecked() {
        this.setState({
            checked: !this.state.checked,
            disabled: !this.state.disabled,
        });

        if ( this.state.checked == false ) {
            this.itemInput.classList.add('doneItem');
            this.disabledButton.classList.add('disabledButton');
        } else {
            this.itemInput.classList.remove('doneItem');
            this.disabledButton.classList.remove('disabledButton');
        }
    }

    render() {
        return (
            <ListItens>
                <div className='listItens'>
                    <div className='actionInputs'>
                        <input type='checkbox' title="Marcar como 'Feito'" className='doneButton' onChange={this.handleIsChecked} defaultChecked={this.state.checked} disabled={this.state.disabledCheckbox} ref={(checkbox) => { this.disabledCheckbox = checkbox; }}></input>
                        <input type='text' className='listItem' value={this.state.inputValue} readOnly={this.state.readOnly} onChange={this.handleTextChange} ref={(input) => { this.itemInput = input; }} />
                    </div>
                    <div className='actionButtons'>
                        <button className='editButton' title="Editar" onClick={this.handleEditItem} hidden={this.state.hiddenEdit} disabled={this.state.disabled} ref={(button) => { this.disabledButton = button; }}><FaPen /></button>
                        <button className='editedButton' title="Salvar" onClick={this.handleEditedItem} hidden={this.state.hiddenSave}><FaCheck /></button>
                        <button className='removeButton' title="Remover" onClick={this.handleRemoveItem}><FaTrash /></button>
                    </div>
                </div>
            </ListItens>
        );
    }
}