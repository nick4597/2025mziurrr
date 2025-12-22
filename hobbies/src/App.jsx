import "./App.css";
import { useState } from "react";


function App() {
  return (
        <div className="app">
      <h1>My Hobbies</h1>
      <div className="hobby-form">
        <input
          type="text"
          placeholder="Enter a new hobby..."
          className="hobby-input"
        />
        <button className="save-button">Save</button>

        <div className="tabs">
  <button
    className={activeTab === "all" ? "tab active" : "tab"}
    onClick={() => setActiveTab("all")}
  >
    all hobbies
  </button>

  <button
    className={activeTab === "favorites" ? "tab active" : "tab"}
    onClick={() => setActiveTab("favorites")}
  >
    favorite hobbies
  </button>
</div>
  )

const [ActiveTab, setActiveTab] = useState("all");


export default App;
