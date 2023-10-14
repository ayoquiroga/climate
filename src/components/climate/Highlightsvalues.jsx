import React from 'react';
import { Uvindex } from './Uvindex';
import { WindStatus } from './Windstatus';
import { Sunrisesunset } from './Sunrisesunset';
import { Humidity } from './Humidity';
import { Visibility } from './Visibility';
import { Airquality} from './Airquality';
import styled from 'styled-components';

const DIV = styled.div`
  display: flex;
  flex-wrap: wrap;
  filter:alpha(opacity=50); 
  opacity:1.9;
  grid-column: 2 / 2;
  grid-row: 6 / 13;
  justify-content: center;
  position: relative;
`;


export const Highlightsvalues = (props) => {

    return(<DIV>
            <Uvindex uvindex={props.uvindex} />
            <WindStatus windspeed={props.windspeed} winddirection={props.winddirection} />
            <Sunrisesunset sunset={props.sunset} sunrise={props.sunrise} />
            <Humidity humidity={props.humidity} />
            <Visibility visibility={props.visibility} />
            <Airquality visibility={props.visibility} />
          </DIV>
          );
}