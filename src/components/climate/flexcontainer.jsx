import React from 'react';
import { Uvindex } from './Uvindex';
import { WindStatus } from './Windstatus';
import { Sunrisesunset } from './Sunrisesunset';
import { Humidity } from './Humidity';
import { Visibility } from './Visibility';
import { Airquality } from './Airquality';
import styled from 'styled-components';

const DIV = styled.div`
  display: flex;
  flex-wrap: wrap;
  filter:alpha(opacity=50); 
  opacity:1.9;
  grid-column: 2 / 2;
  grid-row: 5 / 11;
  justify-content: center;
`;


export const Flexcontainer = ()=>{
    return(<DIV>
        <Uvindex />
        <WindStatus />
        <Sunrisesunset />
        <Humidity />
        <Visibility />
        <Airquality />
    </DIV>

    );
}