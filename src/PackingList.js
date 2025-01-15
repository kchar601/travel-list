function PackingList({
  items,
  setItems,
  handleFilterChange,
  filter,
  handleRemoveItem,
  completeCount,
  setCompleteCount,
}) {
  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const handleCompletedChange = (item) => {
    item.completed = !item.completed;
    console.log(item, "completed");
    if (item.completed && completeCount <= items.length) {
      setCompleteCount((s) => s + 1);
    } else if (completeCount > 0) {
      setCompleteCount((s) => s - 1);
    }
  };

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

  const handleClearList = () => {
    setItems([]);
  };

  return (
    <div className="list">
      <ul className="listTarget">
        {filteredItems.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              onChange={() => handleCompletedChange(item)}
            />
            <span className={item.completed ? "complete" : ""}>
              {item.quantity} {item.text}
            </span>
            <button onClick={() => deleteItem(item.id)}>❌</button>
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
