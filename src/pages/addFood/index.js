import React from 'react';
import {Input, Form} from '@rocketseat/unform';
import PageHeader from '../../components/pageHeader';
import api from '../../services/api';
import {Container} from './style';

export default function AddFood(){
    async function handleAdd(d){
        const {data} = await api.post('/food/create', d)
        console.log(data);

    }

    return(
        <>
        <PageHeader></PageHeader>
        <Container>   
        <div className="boxPage">
            <Form onSubmit={handleAdd}>
                <Input name="name" className="inputUser" type="text" placeholder="Nome"/>
                <Input name="description" className="inputUser" type="text" placeholder="Descrição"/>
                <Input name="price" className="inputUser" type="number" step="any" placeholder="Preço"/>
                <Input name="amount" className="inputUser" type="text" placeholder="Quantidade"/>
                <Input name="food" className="inputUser" type="text" placeholder="Pizza, rodizio, ..."/>
                <button className="inputSubmite" type="submit">Cadastrar</button>
            </Form>
        </div>
    </Container>
        
        
        </>
    );
}