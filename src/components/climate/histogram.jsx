import React from 'react';
import styled from 'styled-components';

const DIV = styled.div`
  background-color: rgb(235, 146, 73);
  grid-column: 2 / 2;
  grid-row: 2 / 4;
  text-align: left;
  color: white;
  font-size: larger;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`;

export const Histogram = ()=>{
    return(<DIV>
        <p>Histogram</p>
    </DIV>
    );
}