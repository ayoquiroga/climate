import React from 'react';
import styled from 'styled-components';

const DIV = styled.div`
  background-color: rgb(235, 146, 73);
  grid-column: 2 / 2;
  grid-row: 2 / 5;
  text-align: center;
  color: white;
  font-size: 10px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`;

export const Histogram = ({values})=>{


    return(<DIV>
        <p>{values["labels"][0]} {values["labels"][1]} {values["labels"][2]} {values["labels"][3]} {values["labels"][4]} {values["labels"][5]} {values["labels"][6]} {values["labels"][7]} {values["labels"][8]} {values["labels"][9]}</p>
    </DIV>
    );
}