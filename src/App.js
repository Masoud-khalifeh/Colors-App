import seedColors from './seedColors';
import PalletesPage from './PalettesPage';
import Palette from './Palette';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import {v4 as uuid} from 'uuid';



function App() {
  return (
    <Routes>
      <Route path="/" element={<PalletesPage PaletteArrays={seedColors}/>}/>
      {seedColors.map(palette=>(
        <Route key={uuid()} path={`palette/${palette.id}`} element={<Palette {...palette}/>}/>
      ))}
    </Routes>   
  )
}

export default App;
