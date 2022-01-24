import React from 'react';
import Form from './Form';

import { GlobalStyles, Div, Title } from './styles';

export default class App extends React.Component {
    render() {
        return (
            <Div>
                <GlobalStyles/>
                <Title>Lista de Tarefas</Title>
                <Form/>
            </Div>
        );
    }
}