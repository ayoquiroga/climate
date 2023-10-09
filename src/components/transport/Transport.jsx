import React from 'react'
import muypronto from '../img/muypronto.jpg'
import styled from 'styled-components';

const IMG = styled.img`
  position: relative;
`;

function Transport() {
  return(<>
    <IMG src={muypronto} alt="muypronto" />
    </>
  );
}

export default Transport