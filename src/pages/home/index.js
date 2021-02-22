import React from 'react';

import PageHeader from '../../components/pageHeader/index';
import {Container} from './style';
import Menu from '../../components/menu/index';


export default function Home(){
    return(
        <>

        <Container>
            <Menu></Menu>
        </Container>

        <PageHeader></PageHeader>


        </>
    );
}