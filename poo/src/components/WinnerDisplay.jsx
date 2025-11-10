export default function WinnerDisplay({ winner, resetGame }) {

    const winnerStyle = {
    fontSize: "40px",
  };

  const WinnerButtonStyle = {
    backgroundColor: "#30ff4cff",
    padding: "10px 20px",
    color: "#000000ff",
    fontSize: "30px",
    cursor: "pointer",
  };

  return (
    <div style={winnerStyle}>
      <h2>{winner}</h2>
      <button style={WinnerButtonStyle} onClick={resetGame}>
        play again
      </button>
    </div>
  );
}
