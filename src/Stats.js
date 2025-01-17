function Stats({ items }) {
  const completeCount = items.filter((item) => item.completed).length;

  if (!items.length)
    return (
      <div className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </div>
    );
  else if (completeCount === items.length)
    return (
      <div className="stats">
        <em>You got everything! Ready to go ✈️</em>
      </div>
    );

  const completePercentage = Math.round(
    (completeCount / (items.length || 1)) * 100
  );

  return (
    <div className="stats">
      <em>
        💼 You have {items.length} items on your list, and you already packed{" "}
        {completeCount} ({completePercentage}%)
      </em>
    </div>
  );
}

export default Stats;
