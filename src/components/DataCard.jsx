import { FaCheck } from "react-icons/fa";
import { MdUndo } from "react-icons/md";
import { IoCheckmarkDone } from "react-icons/io5";

const DataCard = ({ item, handleComplete, handleDelete, handleEdit }) => {
  return (
    <>
      <div>
        <h2>{item.name}</h2>
        <div>
          {item.isCompleted && <FaCheck />}
          <button onClick={() => handleComplete(item.id)}>
            {item.isCompleted ? <MdUndo /> : <IoCheckmarkDone />}
          </button>
        </div>
        <button onClick={() => handleEdit(item.id, item.name)}>Edit</button>
        <button onClick={() => handleDelete(item.id)}>Delete</button>
      </div>
    </>
  );
};

export default DataCard;
