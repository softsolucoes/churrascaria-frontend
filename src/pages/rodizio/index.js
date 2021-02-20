import React from 'react';

import PageHeader from '../../components/pageHeader/index';
import Menu from '../../components/menu/index';
import Food from '../../components/food';
import {Container} from './style';
import Picture from '../../components/picture';

export default function Rodizio(){
    return(
        <>

        <Container>
            <Menu></Menu>
        </Container>

        <PageHeader></PageHeader>
        <Picture src="https://exame.com/wp-content/uploads/2020/09/GOPR0033-1.jpg" tipo="Rodizio" preco="R$ 129.90"></Picture>
        <Food name="Rodizio de boi" desc="Rodizio para 5 pessoas, incluí maminha, cupim e contra fíle"></Food>
        <Food name="Rodizio de boi" desc="Rodizio para 5 pessoas, incluí maminha, cupim e contra fíle"></Food>
        <Food name="Rodizio de boi" desc="Rodizio para 5 pessoas, incluí maminha, cupim e contra fíle"></Food>
        <Food name="Rodizio de boi" desc="Rodizio para 5 pessoas, incluí maminha, cupim e contra fíle"></Food>
        <Food name="Rodizio de boi" desc="Rodizio para 5 pessoas, incluí maminha, cupim e contra fíle"></Food>


        </>
    );
}