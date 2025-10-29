import Player from "./components/Player";

function App() {

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