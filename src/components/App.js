import React from 'react';
import Form from './Form';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>O que eu preciso fazer hoje?</h1>
                <Form title="Teste"/>
            </div>
        );
    }
}