import { useState } from "react";

function PackingList({ items, setItems }) {
  const [filter, setFilter] = useState("All");

  function handleFilterChange(e) {
    setFilter(e.target.value);
  }

  function handleDeleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (!confirmed) return;
    setItems([]);
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  const filteredItems = items.slice().sort((a, b) => {
    if (filter === "Input") {
      return a.id - b.id; // Newest items first
    } else if (filter === "Text") {
      return a.text.localeCompare(b.text); // Alphabetical order
    } else if (filter === "Status") {
      if (a.completed === b.completed) {
        return b.id - a.id; // Newest items first
      }
      return a.completed - b.completed; // Incomplete items first
    } else if (filter === "Quantity") {
      if (a.quantity === b.quantity) {
        return b.id - a.id; // Newest items first
      }
      return b.quantity - a.quantity; // Greatest quantity first
    }
    return 0;
  });

  return (
    <div className="list">
      <ul className="listTarget">
        {filteredItems.map((item) => (
          <li key={item.id}>
            <input type="checkbox" onChange={() => handleToggleItem(item.id)} />
            <span className={item.completed ? "complete" : ""}>
              {item.quantity} {item.text}
            </span>
            <button onClick={() => handleDeleteItem(item.id)}>❌</button>
          </li>
        ))}
      </ul>
      <div className="actions">
        <select id="filterSelect" value={filter} onChange={handleFilterChange}>
          <option value="Input">Sort by input order</option>
          <option value="Text">Sort by description</option>
          <option value="Status">Sort by packed status</option>
          <option value="Quantity">Sort by quantity of items</option>
        </select>
        <button onClick={handleClearList}>Clear List</button>
      </div>
    </div>
  );
}

export default PackingList;
