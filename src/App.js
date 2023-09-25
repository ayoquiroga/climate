import './App.css';
// import { Airquality } from './components/airquality';
import { Cloud } from './components/climate/cloud';
import { Highlights } from './components/climate/highlights';
import { Highlow } from './components/climate/highlow';
import { Histogram } from './components/climate/histogram';
import { Temperometer } from './components/climate/temperometer';
import { Today } from './components/climate/today';
import { Flexcontainer } from './components/climate/flexcontainer';


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
