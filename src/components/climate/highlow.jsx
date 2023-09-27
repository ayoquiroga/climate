import React from 'react';
import styled from 'styled-components';

const DIV = styled.div`

  background-color: rgb(235, 146, 73);
  grid-column: 1 / 2;
  grid-row: 7 / 11;
  color: white;
  margin-bottom: 7%;
  width: 90%;
  text-align: center;
  margin-left: 5%;
`;

export const Highlow = ()=>{
    return(<DIV>
        <p>High | Low</p>
    </DIV>

    );
}