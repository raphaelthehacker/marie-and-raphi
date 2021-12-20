import marieundraphi from './assets/marieundraphi.jpg';
import shesaidyes from './assets/shesaidyes.gif';
import './App.css';

import React, { Suspense, useState } from 'react';

const Confetti = React.lazy(() => import('react-confetti'));

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
      <Suspense fallback={<div></div>}>
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          gravity={gravity}
          numberOfPieces={numberOfPieces}
        />
      </Suspense>

      <img src={shesaidyes} className="she-said-yes" alt="she-said-yes" />
      <img src={marieundraphi} className="marie-and-raphi" alt="marie und raphi" />
    </div>
  );
}

export default App;
