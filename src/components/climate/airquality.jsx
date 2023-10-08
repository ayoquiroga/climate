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


export const Airquality = ({values})=>{
    return(<DIV>
        <p>Air Quality</p>
        <p>{values["airquality"]}</p>
    </DIV>

    );
}