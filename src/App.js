import MCUShows from "./mcu-shows/MCUShows";
import {useState} from 'react'
const releaseDates = {
  wandaVision: 'January 2021',
  falconWinter: 'March 2021',
  loki: 'June 2021',
  whatIf: 'August 2021',
  hawkeye: 'November 2021',
  moonKnight: 'March 2022',
  msMarvel: 'June 2022'
 };
 const mcuCharacters = [
  'Wanda Maximoff',
  'Vision',
  'Falcon',
  'Winter Soldier',
  'Loki',
  'The Watcher',
  'Hawkeye',
  'Kate Bishop',
  'Moon Knight',
  'Ms. Marvel'
 ];
 

function App() {
  const [index, setIndex] = useState(0)

 const [num, setNum] = useState(0)

  function randomChar(){
    setIndex(Math.floor(Math.random() * mcuCharacters.length))
  }
  function nextChar(){
    if (num === mcuCharacters.length -1){
      setNum(0);
    }
    else {
      setNum(num+1)
    }
  }
  return (
    <div >
      <h1>FINAL REACT EXERCISE</h1>
      <MCUShows dates={releaseDates} randomChar={randomChar} nextChar={nextChar} />
      <h1>Random MCU Character: {mcuCharacters[index]}</h1>
      <h1>Nex MCU Character: {mcuCharacters[num]}</h1>
    </div>
  );
}

export default App;
