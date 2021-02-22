import React from 'react';
import api from '../../services/api';
import {Container} from './style'
import PageLoginAndRegister from '../../components/pageLoginAndRegister';
import PageHeader from '../../components/pageHeader';

export default function Login(){
    return(
        <>
        
        <Container>
        <PageHeader></PageHeader>
        <PageLoginAndRegister
            funcao={async function handleAdd(d){
                const {data} = await api.post('/user/login', d)
                console.log(data);

                }
            }
        >
        </PageLoginAndRegister>
        </Container>
        
        </>
    );
}