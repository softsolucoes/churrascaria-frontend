import React from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import {Container} from './style'


export default function Home(props){
    return(
        <>
        
        <Container>
            
                <div className="food">
                    

                    <div className="info">
                        <div className="description">
                            <h3>{props.name}</h3>
                    <p>{props.desc} {props.preco}</p>
                        </div>
                        <Popup  trigger={<button className="buttonAsk">Qtd</button>}>
                    <div>
                        <form className="form">
                            <select>
                                <option value={1} selected>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </select>
                            <button type="submit">Pedir</button>
                        </form>
                    </div>
                </Popup>
                    </div>
                </div>
        </Container>
        </>
    );
}