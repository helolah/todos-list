import React from 'react';
import Form from './Form';

import { Div, Title } from './styles';

export default class App extends React.Component {
    render() {
        return (
            <Div>
                <Title>O QUE EU PRECISO FAZER HOJE?</Title>
                <Form title="Teste" />
            </Div>
        );
    }
}