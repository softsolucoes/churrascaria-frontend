import React from 'react';

import PageHeader from '../../components/pageHeader/index';
import Menu from '../../components/menu/index';
import Food from '../../components/food';
import {Container} from './style';
import Picture from '../../components/picture';

export default function SelfService(){
    return(
        <>

        <Container>
            <Menu></Menu>
        </Container>

        <PageHeader></PageHeader>
        <Picture src="https://www.savarejo.com.br/portal/principal/arquivos/imagens/20200610_Buffet_KG_materia.jpg" tipo="Self Service" preco="R$ 29.90"></Picture>
        <Food name="Rodizio de boi" desc="Rodizio para 5 pessoas, incluí maminha, cupim e contra fíle"></Food>
        <Food name="Rodizio de boi" desc="Rodizio para 5 pessoas, incluí maminha, cupim e contra fíle"></Food>
        <Food name="Rodizio de boi" desc="Rodizio para 5 pessoas, incluí maminha, cupim e contra fíle"></Food>
        <Food name="Rodizio de boi" desc="Rodizio para 5 pessoas, incluí maminha, cupim e contra fíle"></Food>
        <Food name="Rodizio de boi" desc="Rodizio para 5 pessoas, incluí maminha, cupim e contra fíle"></Food>


        </>
    );
}