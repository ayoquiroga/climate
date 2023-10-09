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

export const Cloud = ({values})=>{


    return(<DIV>
            <P>Viento</P>
            <P>{values["current_weather"]["windspeed"]}  {values["daily_units"]["windspeed_10m_max"]}</P>
            <P>{dateparse()}</P>
            {/* <P>{values["current_weather"]["time"]}</P> */}
          </DIV>
    );
}