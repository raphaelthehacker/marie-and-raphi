import marieundraphi from './assets/marieundraphi.jpg';
import shesaidyes from './assets/shesaidyes.gif';
import Confetti from 'react-confetti'
import './App.css';
import { useState } from 'react';

function App() {

  const [gravity, setGravity] = useState(0.1)
  const [numberOfPieces, setNumberOfPieces] = useState(200)

  const startConfettiParty = () => {
    setGravity(10);
    setNumberOfPieces(1000);
  }

  const stopConfettiParty = () => {
    setGravity(0.1);
    setNumberOfPieces(200);
  }

  return (

    <div onTouchStart={(startConfettiParty)} onMouseDown={startConfettiParty} onTouchEnd={stopConfettiParty} onMouseUp={stopConfettiParty} className="app">
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        gravity={gravity}
        numberOfPieces={numberOfPieces}
      />
      <img src={shesaidyes} className="she-said-yes" alt="she-said-yes" />
      <img src={marieundraphi} className="marie-and-raphi" alt="marie und raphi" />
    </div>
  );
}

export default App;
