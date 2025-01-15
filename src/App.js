import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import PackingList from "./PackingList";

function App() {
  const [items, setItems] = useState([]);
  const [itemText, setItemText] = useState("");
  const [filter, setFilter] = useState("All");
  const [quantity, setQuantity] = useState(1);
  const [completeCount, setCompleteCount] = useState(0);

  const handleAddItem = (e) => {
    e.preventDefault();
    if (itemText.trim()) {
      setItems([
        ...items,
        {
          id: Date.now(),
          text: itemText,
          completed: false,
          quantity: quantity,
        },
      ]);
      setItemText("");
    }
  };

  const handleInputChange = (e) => {
    setItemText(e.target.value);
  };

  // Filter tasks based on completion status
  const handleFilterChange = (e) => {
    setFilter(e.target.value); // Update the selected filter
  };

  return (
    <div className="App">
      <h1>🏝️ FAR AWAY 💼</h1>
      <Form
        quantity={quantity}
        setQuantity={setQuantity}
        itemText={itemText}
        handleAddItem={handleAddItem}
        handleInputChange={handleInputChange}
      />
      <PackingList
        items={items}
        setItems={setItems}
        handleFilterChange={handleFilterChange}
        filter={filter}
        completeCount={completeCount}
        setCompleteCount={setCompleteCount}
      />
      <div className="stats">
        💼 You have {items.length} items on your list, and you already packed{" "}
        {completeCount}
        {completeCount > 0 && (
          <> ({((completeCount / items.length) * 100).toFixed(0)}%)</>
        )}
      </div>
    </div>
  );
}

export default App;
