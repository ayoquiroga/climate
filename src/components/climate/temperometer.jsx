import React from 'react';
import styled from 'styled-components';

const DIV = styled.div`
    grid-column: 1 / 2;
    grid-row: 1 / 6;
    width: 12rem;
    height: 12rem;
    border-radius: 50%;
    margin: auto;
    background-color: rgb(244, 247, 247);
`;

const P = styled.p`
  text-color: rgb(152, 149, 149);
  margin-top: 105px;
`;

export const Temperometer = ({values})=>{

    
    return(<DIV>
        <P>{values["temperature"]} {values["unidadtemperature"]}</P>
    </DIV>

    );
}