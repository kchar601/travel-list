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
    <form className="add-form" onSubmit={handleAddItem}>
      <p>What do you need for your 😍 trip?</p>
      <select value={quantity} onChange={handleQuantityChange}>
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
        onChange={handleInputChange}
      />
      <button disabled={!itemText.trim()}>ADD</button>
    </form>
  );
}

export default Form;
