import React from 'react';
import { Uvindex } from './uvindex';
import { WindStatus } from './windstatus';
import { Sunrisesunset } from './sunrisesunset';
import { Humidity } from './humidity';
import { Visibility } from './visibility';
import { Airquality } from './airquality';

export const Flexcontainer = ()=>{
    return(<div class="flexcontainer">
        <Uvindex />
        <WindStatus />
        <Sunrisesunset />
        <Humidity />
        <Visibility />
        <Airquality />
    </div>

    );
}