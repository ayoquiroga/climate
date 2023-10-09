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

export const Sunrisesunset = ({values})=>{

  
  function parseSunrise(){

    //hay que hacerlo automático
    let sunrise= values["sunrise"][0]

    return convertFromStringToDate(sunrise)

  }

  function parseSunset(){

        //hay que hacerlo automático
    let sunset = values["sunset"][0]

    return convertFromStringToDate(sunset);
  }

    return(<DIV>
            <P>Sunrise | Sunset</P>
            <P>{parseSunrise()} | {parseSunset()}</P>
          </DIV>

    );
}


