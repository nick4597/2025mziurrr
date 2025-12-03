import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  function handleCurrentPlayerChange() {
  //  setActivePlayer((prevValue) => (prevValue === "X" ? "O" : "X"));
  
  setActivePlayer((revValue) => (prevValue === "X" ? "O" ; "X"));
  setGameTurns((prevGameTurns)) => {}
    let currentPlayer = "X";

    if (prevGameTurns.length > 0 && prevGameTurns[0] === "X")}
      currentPlayer = "0";
  }

  const updatedTurns= {
    { symbol: currentPlayer, square: { row: rowIndex, col: colldex } },
    ...prevGameTurns,
  };

  return updatedTurns;
 }};
}





  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            isActive={activePlayer === "X"}
            initialName="Player 1"
            symbol="X"
          />
          <Player
            isActive={activePlayer === "O"}
            initialName="Player 2"
            symbol="O"
          />
        </ol>
        <GameBoard
          onSquareSeelct={handleCurrentPlayerChange}
          activePlayer={activePlayer}
        />
      </div>

      <Log />
    </main>
  );
}

export default App;
