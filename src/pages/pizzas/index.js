import React from 'react';

import PageHeader from '../../components/pageHeader/index';
import Menu from '../../components/menu/index';
import Food from '../../components/food';
import {Container} from './style';
import Picture from '../../components/picture';

export default function Pizzas(){
    return(
        <>

        <Container>
            <Menu></Menu>
        </Container>

        <PageHeader></PageHeader>
        <Picture src="https://i2.wp.com/magnusrodiziodepizza.com/wp-content/uploads/2018/02/rodizio-de-pizza-para-eventos-fortaleza-magnus.jpg?resize=700%2C350" tipo="Pizzas"></Picture>
        <Food name="Rodizio de boi" desc="Rodizio para 5 pessoas, incluí maminha, cupim e contra fíle"></Food>
        <Food name="Rodizio de boi" desc="Rodizio para 5 pessoas, incluí maminha, cupim e contra fíle"></Food>
        <Food name="Rodizio de boi" desc="Rodizio para 5 pessoas, incluí maminha, cupim e contra fíle"></Food>
        <Food name="Rodizio de boi" desc="Rodizio para 5 pessoas, incluí maminha, cupim e contra fíle"></Food>
        <Food name="Rodizio de boi" desc="Rodizio para 5 pessoas, incluí maminha, cupim e contra fíle"></Food>


        </>
    );
}