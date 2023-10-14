import React from 'react';
import styled from 'styled-components';
import './Temperometer.css'

const DIV = styled.div`
    grid-column: 1 / 2;
    grid-row: 1 / 6;
    ${'' /* width: 12rem;
    height: 12rem;
    border-radius: 50%;
    margin: auto;
    background-color: rgb(244, 247, 247);
    position: relative; */}
`;

const P = styled.p`
  text-color: rgb(152, 149, 149);
  margin-top: 105px;
  position: relative;
`;

export const Temperometer = (props)=>{

    
    return( 
        <DIV className='temperature'>
            <P>{props.temperature} {props.tempunit}</P>
        </DIV>
    );
}