import React from 'react';
import styled from 'styled-components';
import './Highlow.css'

const DIV = styled.div`

  background-color: rgb(235, 146, 73);
  grid-column: 1 / 2;
  grid-row: 9 / 13;
  color: white;
  margin-bottom: 15%;
  margin-top: -5%;
  width: 90%;
  ${'' /* text-align: center; */}
  margin-left: 10%;
  background: linear-gradient(70deg, rgb(235, 146, 73), #FFB233);
`;

const P = styled.p`
  font-size: 1.8rem;
`;


export const Highlow = ({values})=>{
    return(<DIV>
            <P className='hl'>{values["high"][0]} | {values["low"][0]}</P>
            <P className="lbls">High | Low</P>
          </DIV>

    );
}