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



export const Sunrisesunset = ({values})=>{

  function parseSunrise(){
    let sunrise= values["sunrise"][0]
    return sunrise
  }

  function parseSunset(){
    let sunset = values["sunset"][0]
    return sunset;
  }
  
    return(<DIV>
            <p>Sunrise Sunset</p>
            <p>{parseSunrise()}</p>
            <p>{parseSunset()}</p>
          </DIV>

    );
}


