import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(newItem) {
    setItems((items) => [...items, newItem]);
  }

  return (
    <div className="App">
      <h1>🏝️ FAR AWAY 💼</h1>
      <Form handleAddItem={handleAddItem} />
      <PackingList items={items} setItems={setItems} />
      <Stats items={items} />
    </div>
  );
}

export default App;
