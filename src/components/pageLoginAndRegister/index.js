import React from 'react';
import {Form, Input} from '@rocketseat/unform';
import { Container } from './style';

export default function PageLoginAndRegister(props){

    return(
        <>
        <Container>   
            <div className="boxPage">
                <Form onSubmit={props.funcao}>
                    {props.input}
                    <Input name="email" className="inputUser" type="text" placeholder="Email"/>
                    <Input name="password" className="inputUser" type="password" placeholder="Senha"/>
                    <button className="inputSubmite" type="submit">Cadastrar</button>
                </Form>
            </div>
        </Container>

        </>
    );
}
