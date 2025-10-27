function App() {
  const diceEmojis = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

  return (
    <div
      style=({
        textAlign: "center",
        padding: "20px",
        margin: 0,
      })
    >
      <h1>2 player dice gane</h1>
    
      <div>
        <div>
          <h3>PLayer 1</h3>
          <div style<={{ fontSize "60px"}}>⚀</div>
          <p>1</p>
        </div>

        <div>VS</div>

        <div>
          <h3>PLayer 2</h3>
          <div style<={{ fontSize "60px"}}>⚀</div>
          <p>1</p>  
        </div>  
      
      
        </div>  
    </div>
      );   
    }


export default App;
