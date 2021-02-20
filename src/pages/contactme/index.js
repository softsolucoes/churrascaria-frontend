import React from 'react';
import PageHeader from '../../components/pageHeader';
import Menu from '../../components/menu';
import { Content, StructureComp } from './style';
import {Form, Input} from '@rocketseat/unform'
// import api from '../../services/api';

export default function Works(){
    // async function handleSubmit(dados){
    //     await api.post('/mail', dados);
        
    // }
    return(
        <>
        <StructureComp>
        <Menu></Menu>
        </StructureComp>
            <Content>
                <PageHeader></PageHeader>
                <h3 className="h3-1">Me Contate</h3>
                <h1>Entre em Contato</h1>

                <Form >
                    <Input className="name" name="FNAME" placeholder="Nome"/>
                    <Input className="email" type="email" name="EMAIL" placeholder="E-mail"/><br></br>
                    <Input className="projeto" name="PROJETO" placeholder="Projeto"/><br></br>
                    <Input className="mensagem" name="MENSAGEM" placeholder="Mensagem"/><br></br>
                    <button className="enviar" type="submit">Enviar</button>
                </Form>

                <div className="info">
                    <h3>Me Ligue</h3><br></br>
                    <p>(82) 99839 - 4523</p>
                    <p>(82) 99839 - 4523</p><br></br>

                    <h3>E-mail</h3><br></br>
                    <p>deveduardomelo@gmail.com</p>
                    <p>deveduardomelo@gmail.com</p><br></br>

                    <h3>Localização</h3><br></br>
                    <p>Arapiraca, Alagoas</p>
                </div>

            </Content>
            </>
    )

}
