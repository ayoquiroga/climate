import React, { useState } from "react";
import { Cloud } from './Cloud';
import { Highlights } from './Highlights';
import { Highlow } from './Highlow';
import { Histogram } from './Histogram';
import { Temperometer } from './Temperometer';
import { Today } from './Today';
import { Highlightsvalues } from './Highlightsvalues';
import styled from "styled-components";
import datajson from './data.json';

const DIV = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  grid-template-rows: repeat(12, 100px);
  background-color: rgb(116, 208, 216);
`;



export const Weather = () => {

  const [temperatures] = useState({
    temperature: datajson["current_weather"]["temperature"], 
    unidadtemperature: datajson["hourly_units"]["temperature_2m"]
  })

  const [highlightsvalues] = useState({
    uvindex: datajson["current_weather"]["uvindex"],
    windSpeed: datajson["current_weather"]["windspeed"],
    windirection: datajson["current_weather"]["winddirection"],
    sunrise: datajson["daily"]["sunrise"],
    sunset: datajson["daily"]["sunset"],
    humidity: datajson["current_weather"]["humidity"],
    visibility: datajson["current_weather"]["visibility"],
    airquality: datajson["current_weather"]["airquality"]
  })

  const [highlows] = useState({
    high: datajson["daily"]["temperature_2m_max"], 
    low: datajson["daily"]["temperature_2m_min"]
  })

  const [windstatus] = useState({
    windspeed: datajson["current_weather"]["windspeed"], 
    windunit: datajson["daily_units"]["windspeed_10m_max"], 
    currentdate: datajson["current_weather"]["time"]
  })

  const [datahisto] =useState({
    labels: ['12:00 AM', '03:00 AM', '06:00 AM', '09:00 AM', '12:00 PM', '03:00 PM', '06:00 PM', '09:00 PM', '12:00 AM',]
    // datasets:[{
    //   label:'Hora',
    //   backgroundColor: 'white',
    //   borderWidth: 1,
    //   hoverBackgroundColor: 'grey',
    //   data: [30,20,25,10,25,63,80,25,26]
      // }]
    })

  return( 
  <DIV>
    <Temperometer values={temperatures} />
    <Cloud values={windstatus}/>
    <Highlow values={highlows} />
    <Today />
    <Histogram values={datahisto} />
    <Highlights />
    <Highlightsvalues values={highlightsvalues}  />
  </DIV>
  );
}
