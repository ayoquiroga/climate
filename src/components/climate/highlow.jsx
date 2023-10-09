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
  margin-left: 10%;
  background: linear-gradient(70deg, rgb(235, 146, 73), #FFB233);
  position: relative;
`;

const P = styled.p`
  font-size: 1.8rem;
  position: relative;
`;


export const Highlow = ({values})=>{
    return(<DIV>

            {/* hacerlo dinámico */}
            <P className='hl'>{values["daily"]["temperature_2m_max"][0]} | {values["daily"]["temperature_2m_min"][0]}</P>
            <P className="lbls">High | Low</P>
          </DIV>

    );
}