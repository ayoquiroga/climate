import React, { useState } from "react";
import { Cloud } from './Cloud';
import { Highlights } from './Highlights';
import { Highlow } from './Highlow';
import { Histogram } from './Histogram';
import { Temperometer } from './Temperometer';
import { Today } from './Today';
import { Flexcontainer } from './Flexcontainer';
import styled from "styled-components";
import datajson from './data.json';

const DIV = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  grid-template-rows: repeat(9, 100px);
  background-color: rgb(116, 208, 216);
`;

export const Weather = () => {

  // const [values, setValues] = useState('')

  const [temperatures] = useState({temperature: datajson["current_weather"]["temperature"], 
                                  unidadtemperature: datajson["hourly_units"]["temperature_2m"]})

  const [flexcontainer] = useState({
    uvindex: datajson["current_weather"]["uvindex"],
    windSpeed: datajson["current_weather"]["windspeed"],
    windirection: datajson["current_weather"]["winddirection"],
    sunrise: datajson["daily"]["sunrise"],
    sunset: datajson["daily"]["sunset"],
    humidity: datajson["current_weather"]["humidity"],
    visibility: datajson["current_weather"]["visibility"],
    airquality: datajson["current_weather"]["airquality"]
 
  })

  const [highlows] = useState({high: datajson["daily"]["temperature_2m_max"], low: datajson["daily"]["temperature_2m_min"]})

  const [windstatus] = useState({windspeed: datajson["current_weather"]["windspeed"], winddirection: datajson["current_weather"]["winddirection"], windunit: datajson["daily_units"]["windspeed_10m_max"]})

  const [currentdate] = useState({currentdate: datajson["current_weather"]["time"]})

  return( <DIV>
            <Temperometer values={temperatures} />
            <Cloud values={windstatus}/>
            <Highlow values={highlows} />
            <Today values={currentdate} />
            <Histogram />
            <Highlights />
            <Flexcontainer values={flexcontainer}  />
          </DIV>
  );
}
