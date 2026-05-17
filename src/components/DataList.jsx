import DataCard from "./DataCard";

const DataList = ({ data, handleComplete, handleDelete, handleEdit }) => {
  console.log(data);
  return (
    <>
      {data.length > 0
        ? data.map((item) => (
            <DataCard
              key={item.id}
              item={item}
              handleComplete={handleComplete}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))
        : null}
    </>
  );
};

export default DataList;
