import React from 'react';
import styled from 'styled-components';

const DIV = styled.div`
  background-color: aliceblue;
  text-align: center;
  width: 30%;
  height: 40%;
  text-align: left;
  color: rgb(153, 153, 156);
  font-size: 2rem;
`;

export const Humidity = ({values})=>{
    return(<DIV>
        <p>Humidity</p>
        <p>{values["humidity"]}</p>
    </DIV>

    );
}