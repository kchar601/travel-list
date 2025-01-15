function Form({ quantity, setQuantity, itemText, handleAddItem, setItemText }) {
  const options = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <form className="add-form" onSubmit={handleAddItem}>
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
