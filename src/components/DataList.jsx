import DataCard from "./DataCard";

const DataList = ({ data }) => {
  console.log(data);
  return (
    <>
      {data.length > 0
        ? data.map((item) => <DataCard key={item.id} item={item} />)
        : null}
    </>
  );
};

export default DataList;
