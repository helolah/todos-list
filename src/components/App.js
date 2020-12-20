import React from 'react';
import Form from './Form';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Lista de Tarefas</h1>
                <h4>O que eu preciso fazer hoje?</h4>
                <Form title="Teste"/>
            </div>
        );
    }
}