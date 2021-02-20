import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './style';

export default function Menu({children}){
    return(
        <>
        <Container>
            <div className="select">
                
                <ul>
                    <li><Link className="link" to="/rodizios">RODIZIOS</Link><br></br></li>
                    <li><Link className="link" to="/selfservice">SELF SERVICE</Link><br></br></li>
                    <li><Link className="link" to="/pizzas">PIZZAS</Link><br></br></li>
                    <li><Link className="link" to="/bebidas">BEBIDAS</Link><br></br></li>
                    <li><Link className="link" to="/contactme">CONTATO</Link></li>
                
                </ul>

            </div>
            {children}
        </Container>
        </>
    )

}