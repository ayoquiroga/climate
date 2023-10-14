import React from 'react';
import styled from 'styled-components';

const DIV = styled.div`
  background-color: white;
  width: 30%;
  height: 40%;
  text-align: left;
  color: rgb(153, 153, 156);
  font-size: 2rem;
`;

const P = styled.p`
  text-align: center;
`;


function convertFromStringToDate(responseDate) {
  let dateComponents = responseDate.split('T');
  return(dateComponents[1])
}

export const Sunrisesunset = (props)=>{
  
  function parseSunrise(){

    if(props.sunrise){
      let sunrise= props.sunrise.toString()
      return convertFromStringToDate(sunrise)
    } else {
      let sunrise= '00:00'
      return sunrise
    }
  }

  function parseSunset(){
    //hay que hacerlo automático
    // let sunset = props.sunset
    if(props.sunset){
      let sunset = props.sunset.toString()
      return convertFromStringToDate(sunset);
    } else {
      let sunset= '00:00'
      return sunset
    }
    // return sunset;


  }

    return(<DIV>
            <P>Sunrise | Sunset</P>
            <P>{parseSunrise()} | {parseSunset()}</P>
          </DIV>

    );
}


