import './App.css';
import ParentComponent from './Components/ParentComponent';
import Random from './Components/Random';
import SearchBar from './Components/SearchBar';
import Meemo from './Components/Meemo';
import countryData from './Data.json'
import ColorPicker from './Components/ColorPicker'
import Slider from './Components/Slider';

function App() {
  return (
    <div className="App">
      <SearchBar countries={countryData} placeholder={'Enter Country'}/>
    </div>
  );
}

export default App;
