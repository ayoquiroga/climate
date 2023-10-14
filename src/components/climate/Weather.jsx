import React, { useState , useEffect } from "react";
import { Cloud } from './Cloud';
import { Highlights } from './Highlights';
import { Highlow } from './Highlow';
import { Histogram } from './Histogram';
import { Temperometer } from './Temperometer';
import { Today } from './Today';
import { Highlightsvalues } from './Highlightsvalues';
import styled from "styled-components";
import datajson from './data.json';
// import wmoes from './wmo-es.js'

const DIV = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  grid-template-rows: repeat(12, 110px);
  background-color: rgb(116, 208, 216);
  position: relative;
`;



export const Weather = () => {

  const url='https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,relativehumidity_2m,is_day,weathercode,windspeed_10m,winddirection_10m&hourly=visibility&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&timezone=America%2FSao_Paulo&forecast_days=1'

  const [data, setData] = useState({});
    
  async function obtenerDatosAPI(){
    const response = await fetch(url)
    if(response.ok){
      const datos = await response.json()
      setData(datos)      
    }
  }

  useEffect(() => {
    obtenerDatosAPI()
  }, []);


  const [datahisto] =useState({
    labels: ['12:00 AM', '03:00 AM', '06:00 AM', '09:00 AM', '12:00 PM', '03:00 PM', '06:00 PM', '09:00 PM', '12:00 AM']
    })

   if(!data){
      return <div> Loading</div>;
    } 
console.log(data)
  return( 
  <DIV>
    <Temperometer temperature={data && data["current"] && data["current"]["temperature_2m"]} 
                  tempunit={data && data["current_units"] && data["current_units"]["temperature_2m"]} />
    <Cloud windspeed={data && data["current"] && data["current"]["windspeed_10m"] }/>
    <Highlow high={data && data["daily"] && data["daily"]["temperature_2m_max"]}
             low={data && data["daily"] && data["daily"]["temperature_2m_min"]} />
    <Today />
    <Histogram values={datahisto} />
    <Highlights />
    <Highlightsvalues uvindex={data && data["daily"] && data["daily"]["uv_index_max"]} 
                      windspeed={data && data["current"] && data["current"]["windspeed_10m"]}
                      winddirection={data && data["current"] && data["current"]["winddirection_10m"]}
                      sunrise={data && data["daily"] && data["daily"]["sunrise"] && data["daily"]["sunrise"]}
                      sunset={data && data["daily"] && data["daily"]["sunset"] && data["daily"]["sunset"]}
                      humidity={data && data["current"] && data["current"]["relativehumidity_2m"]}
                      visibility={data && data["hourly"] && data["hourly"]["visibility"] && data["hourly"]["visibility"][0]}
                      airquality={data && data["hourly"] && data["hourly"]["visibility"] && data["hourly"]["visibility"][18]} />
  </DIV>
  );
}
