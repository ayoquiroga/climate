import React from 'react';
import styled from 'styled-components';

const DIV = styled.div`
  /* background-color: rgb(222, 205, 238); */
  grid-column: 1 / 2;
  grid-row: 5 / 8;
  filter:alpha(opacity=50); 
  opacity:0.6;
  color: white;
`;

export const Cloud = ()=>{
    return(<DIV>
        <p>Cloud</p>
    </DIV>

    );
}