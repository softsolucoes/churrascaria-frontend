import React from 'react';
import { Link } from 'react-router-dom';
import { LinkSelect } from './style';
import { VscListSelection } from "react-icons/vsc";

export default function PageHeader(){
    return(
        <>

                <LinkSelect>
                <Link to="/">
                    <button  className="link" >
                        <VscListSelection size="2em" color="black"></VscListSelection>
                    </button>
                </Link>
                <p>Restaurante</p>
                </LinkSelect>

        </>
    )

}