import React from 'react';
import PageLoginAndRegister from '../../components/pageLoginAndRegister';
import {Input} from '@rocketseat/unform';
import PageHeader from '../../components/pageHeader';
import api from '../../services/api';

export default function Register(){

    return(
        <>
        <PageHeader></PageHeader>
        <PageLoginAndRegister 
        input={<Input name="name" className="inputUser" type="text" placeholder="Nome"/>}
        funcao={async function handleAdd(d){
                    const {data} = await api.post('/user/register', d)
                    console.log(data);
    
                }
            }
        >
        </PageLoginAndRegister>
        
        </>
    );
}