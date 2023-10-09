import React from 'react';
import styled from 'styled-components';

const DIV = styled.div`
  filter:alpha(opacity=50); 
  opacity:1.9;
  grid-column: 2 / 3;
  grid-row: 5 / 7;
  text-align: left;
  color: white;
  font-size: 3rem;
  position: relative;
`;

const P = styled.p`
  font-size: 60px;
  position: relative;
`;

export const Highlights = ()=>{
    return(<DIV>
        <P>Highlights</P>
    </DIV>
    );
}