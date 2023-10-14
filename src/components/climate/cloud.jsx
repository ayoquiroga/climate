import React from 'react';
import styled from 'styled-components';

const DIV = styled.div`
  grid-column: 1 / 2;
  grid-row: 5 / 8;
  filter:alpha(opacity=50); 
  color: white;
`;

const P = styled.p`
  text-color: white;
  margin-top: 35px;
`;

function dateparse(){
  let dias = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado' ]
  let today = new Date();
  return dias[today.getDay()]+', '+ today.toLocaleTimeString()
}

export const Cloud = (props)=>{


    return(<DIV>
            <P>Viento</P>
            <P>{props.windspeed}</P>
            <P>{dateparse()}</P>
          </DIV>
    );
}