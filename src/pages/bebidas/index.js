import React from 'react';

import PageHeader from '../../components/pageHeader/index';
import Menu from '../../components/menu/index';
import Food from '../../components/food';
import {Container} from './style';
import Picture from '../../components/picture';

export default function Bebidas(){
    return(
        <>

        <Container>
            <Menu></Menu>
        </Container>

        <PageHeader></PageHeader>
        <Picture src="https://www.falamart.com.br/wp-content/uploads/2020/02/drink-com-vodka-lista-de-bebidas-Capa-1068x712.jpg" tipo="Bebidas" preco=""></Picture>
        <Food name="Rodizio de boi" desc="Rodizio para 5 pessoas, incluí maminha, cupim e contra fíle " preco=" R$ 5"></Food>
        <Food name="Rodizio de boi" desc="Rodizio para 5 pessoas, incluí maminha, cupim e contra fíle"></Food>
        <Food name="Rodizio de boi" desc="Rodizio para 5 pessoas, incluí maminha, cupim e contra fíle"></Food>
        <Food name="Rodizio de boi" desc="Rodizio para 5 pessoas, incluí maminha, cupim e contra fíle"></Food>
        <Food name="Rodizio de boi" desc="Rodizio para 5 pessoas, incluí maminha, cupim e contra fíle"></Food>


        </>
    );
}