import Palette from './Palette';
import seedColors from './seedColors';
import PalletesPage from './PalettesPage';
import './App.css';



function App() {
  return (
    <div className='main'>
      <PalletesPage PaletteArrays={seedColors} />
    </div>
  );
}

export default App;
