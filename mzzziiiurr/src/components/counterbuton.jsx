export default function counterbutton({ title }) {
  return (
       <button
        onClick={() => {
          setCounter(counter - 1);
        }}
        style={{
          margin: "5px",
          padding: "10px 20px",
          cursor: "pointer",
          borderRadius: "8px",
        }}
      >
        {Title}
      </button>
      <CounterButton
        title={"Increase"}
        handleClick={() => {
          setCounter(counter + 1);
        }}
      />
      <CounterButton
        title={"Decrease"}
        handleClick={() => {
          setCounter(counter - 1);
        }}
      />
    </>
  );
}