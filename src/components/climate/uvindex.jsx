import React from 'react';
import styled from 'styled-components';

const DIV = styled.div`
  background-color: white;
  text-align: center;
  width: 30%;
  height: 40%;
  text-align: left;
  color: rgb(153, 153, 156);
  font-size: 2rem;
`;

export const Uvindex = (props)=>{
    return(<DIV>
        <p>UV Index</p>
        <p>{props.uvindex}</p>
    </DIV>

    );
}