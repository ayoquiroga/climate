import React from 'react';
import styled from 'styled-components';

const DIV = styled.div`
  ${'' /* background-color: rgb(235, 146, 73); */}
  background: linear-gradient(70deg, rgb(235, 146, 73), #FFB233);
  grid-column: 2 / 2;
  grid-row: 2 / 5;
  text-align: center;
  color: white;
  font-size: 10px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

const P = styled.p`
  margin: 200px auto;
  font-size: 26px;
  position: relative;
`;

export const Histogram = ({values})=>{


    return(<DIV>
            <P>
              {values["labels"][0]}.....
              {values["labels"][1]}.....
              {values["labels"][2]}.....
              {values["labels"][3]}.....
              {values["labels"][4]}.....
              {values["labels"][5]}.....
              {values["labels"][6]}.....
              {values["labels"][7]}.....
              {values["labels"][8]}
            </P>
    </DIV>
    );
}