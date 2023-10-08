import React from 'react';
import styled from 'styled-components';

const DIV = styled.div`

  background-color: rgb(235, 146, 73);
  grid-column: 1 / 2;
  grid-row: 9 / 13;
  color: white;
  margin-bottom: 7%;
  width: 90%;
  text-align: center;
  margin-left: 5%;
`;

export const Highlow = ({values})=>{
    return(<DIV>
        <p>High | Low</p>
        <p>{values["high"][0]} | {values["low"][0]}</p>
    </DIV>

    );
}