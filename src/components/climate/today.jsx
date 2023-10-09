import React from 'react';
import styled from 'styled-components';

const DIV = styled.div`
  filter:alpha(opacity=50); 
  opacity:1.9;
  grid-column: 2 / 2;
  grid-row: 1 / 2;
  text-align: left;
  color: white;
  font-size: larger;
  position: relative;
`;

const P = styled.p`
  font-size: 60px;
  position: relative;
`;

export const Today = ()=>{
    return(<DIV>
        <P>Today</P>
    </DIV>

    );
}