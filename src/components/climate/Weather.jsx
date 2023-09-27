import React from "react";
import { Cloud } from './Cloud';
import { Highlights } from './Highlights';
import { Highlow } from './Highlow';
import { Histogram } from './Histogram';
import { Temperometer } from './Temperometer';
import { Today } from './Today';
import { Flexcontainer } from './Flexcontainer';
import styled from "styled-components";

const DIV = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  grid-template-rows: repeat(9, 100px);
  background-color: rgb(116, 208, 216);
`;

export const Weather = () => {

    return( <DIV>
                <Temperometer />
                <Cloud />
                <Highlow />
                <Today />
                <Histogram />
                <Highlights />
                <Flexcontainer />
            </DIV>
  );
}
