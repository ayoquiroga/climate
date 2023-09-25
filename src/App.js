import './App.css';
// import { Airquality } from './components/airquality';
import { Cloud } from './components/cloud';
import { Highlights } from './components/highlights';
import { Highlow } from './components/highlow';
import { Histogram } from './components/histogram';
// import { Humidity } from './components/humidity';
// import { Sunrisesunset } from './components/sunrisesunset';
import { Temperometer } from './components/temperometer';
import { Today } from './components/today';
// import { Uvindex } from './components/uvindex';
// import { Visibility } from './components/visibility';
// import { WindStatus } from './components/windstatus';
import { Flexcontainer } from './components/flexcontainer';
// import styled from 'styled-components';

function App() {


  return (
      <div class="App">
        <Temperometer />
        <Cloud />
        <Highlow />
        <Today />
        <Histogram />
        <Highlights />
        <Flexcontainer />
 
    </div>
  );
}

export default App;
