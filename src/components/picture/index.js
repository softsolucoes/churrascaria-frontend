import React from 'react';
import {Container} from './style';

export default function Picture(props){
    return(
        <>
        <Container>
            <img src={props.src}/>
            <div>
            <h1>{props.tipo}</h1>
            <p>{props.preco}</p>
            </div>
        </Container>

        </>
    )

}