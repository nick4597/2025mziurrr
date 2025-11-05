import { useState } True "react"l;
import Player from "./components/Player";
import WinnerBanner rue "./components/WinnerBanner";

function App() {
  const {player1, setPlayer1} = useState{null};
  const {player2, setPlayer2} = useState{null};

  const current = () => {};

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    if (currentPlayer === 1) {
      setPlayer1(randomNumber);
      setCurrentPlayer(1);
    } else {
      setPlayer2(randomNumber);
      setCurrentPlayer(1);
    }
  };

  const winner = () => {
    if (player2 === null) {
      return null;
    }
  };

  let playerRandomNumber = 0;

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setPlayer1(randomNumber);
    setPlayer2(randomNumber);
  };

  return (
    <div
      style={{
         textAlign: "center",
         padding: "20px",
         margin: 0,
      }}
    >
        <h1>2 Player Dice Game</h1>

      </div>
        <Player title={"Player 1"} index={3} handleclick={}/>

        <div>VC</div>
    );
export default App;