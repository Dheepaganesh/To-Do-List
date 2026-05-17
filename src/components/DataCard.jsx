const DataCard = ({ item }) => {
  return (
    <>
      <div>
        <h2>{item.name}</h2>
        <p>{item.isCompleted ? "Completed" : "Not Completed"}</p>
      </div>
    </>
  );
};

export default DataCard;
