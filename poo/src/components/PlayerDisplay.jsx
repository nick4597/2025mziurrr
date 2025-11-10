export default function DiceGame({
  PlayerCount,
  index,
  handleClick,
  isDisabled,
}) {
  const diceEmojis = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

  let buttonStyle = isDisabled
    ? { ...baseStyle, ...disabledStyle }
    : { ...baseStyle };

  const diceEmoji = index === null ? diceEmojis[0] : diceEmojis[index - 1];

  return (
    <div>
      <h3>{PlayerCount}</h3>
      <div style={{ fontSize: "100px" }}>{diceEmoji}</div>
      <button onClick={handleClick} disabled={isDisabled} style={buttonStyle}>
        Roll Dice
      </button>
    </div>
  );
}

const baseStyle = {
  fontSize: "30px",
  margin: "30px",
  cursor: "pointer",
  padding: "15px 35px",
  color: "#ffffffff",
  backgroundColor: "#00d0ffff",
}

const disabledStyle = {
  backgroundColor: "#535353ff",
  cursor: "not-allowed",
  opacity: 0.2,
};
