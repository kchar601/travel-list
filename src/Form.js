function Form({
  quantity,
  setQuantity,
  itemText,
  handleAddItem,
  handleInputChange,
}) {
  const options = Array.from({ length: 20 }, (_, i) => i + 1);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <div className="add-form">
      <p>What do you need for your 😍 trip?</p>
      <select value={quantity} onChange={handleQuantityChange}>
        {options.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={itemText}
        onChange={handleInputChange}
      />
      <button disabled={!itemText.trim()} onClick={handleAddItem}>
        ADD
      </button>
    </div>
  );
}

export default Form;
