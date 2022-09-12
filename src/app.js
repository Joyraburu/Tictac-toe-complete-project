import Board from './board';
import Info from './info';

import "./css/app.css";
import {useState} from 'react';

function App() {
  const [reset, setReset] = useState(false);
  
    // Creating a winner state, which indicates the current winner
    const [winner, setWinner] = useState('');
  
    // Sets the reset property to true which starts the chain  reaction of resetting the board
    const resetBoard = () => {
        setReset(true);
    }
  return (
    <div className="App">
     Boomday Mayday! Its a monday:|
     <div className={`winner ${winner !== '' ? '' : 'shrink'}`}>
                {/* Display the current winner */}
                <div className='winner-text'>{winner}</div>
                {/* Button used to reset the board */}
                <button onClick={() => resetBoard()}>
                    Reset Board
                </button>
            </div>
            <Board reset={reset} setReset={setReset} winner={winner}
            setWinner={setWinner}/>
            <Info/>
    </div>
  );
}

export default App;
