import { useState } from "react";

function Form({ handleAddItem }) {
  const options = Array.from({ length: 20 }, (_, i) => i + 1);
  const [itemText, setItemText] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (itemText === "") return;

    const newItem = {
      id: Date.now(),
      text: itemText,
      completed: false,
      quantity: quantity,
    };

    console.log(newItem);
    handleAddItem(newItem);

    setItemText("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <p>What do you need for your 😍 trip?</p>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {options.map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={itemText}
        onChange={(e) => setItemText(e.target.value)}
      />
      <button disabled={!itemText.trim()}>ADD</button>
    </form>
  );
}

export default Form;
