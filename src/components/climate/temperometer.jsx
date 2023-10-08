import React from 'react';
import styled from 'styled-components';

const DIV = styled.div`
    /* filter:alpha(opacity=50); 
    opacity:1.9; */
    grid-column: 1 / 2;
    grid-row: 1 / 6;
    width: 12rem;
    height: 12rem;
    border-radius: 50%;
    margin: auto;
    background-color: rgb(244, 247, 247);
    color: rgb(152, 149, 149);
`;

export const Temperometer = ({values})=>{

    
    return(<DIV>
        <p>{values["temperature"]}</p>
        <p>{values["unidadtemperature"]}</p>
    </DIV>

    );
}