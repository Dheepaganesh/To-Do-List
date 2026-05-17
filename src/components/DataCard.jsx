import { FaCheck, FaEdit, FaTrash } from "react-icons/fa";
import { MdUndo } from "react-icons/md";
import { IoCheckmarkDone } from "react-icons/io5";

const DataCard = ({ item, handleComplete, handleDelete, handleEdit }) => {
  return (
    <>
      <div className="bg-gray-100 p-4 rounded-md flex justify-between items-center">
        <h2 className="text-2xl font-bold">{item.name}</h2>
        <div className="flex items-center gap-12 min-w-[100px] justify-end">
          {item.isCompleted && (
            <FaCheck className="text-green-500 cursor-pointer underline-offset-2 underline" />
          )}
          <button
            className={`${item.isCompleted ? `bg-red-500` : `bg-green-500`} text-white p-2 rounded-md`}
            onClick={() => handleComplete(item.id)}
          >
            {item.isCompleted ? (
              <MdUndo className="text-white cursor-pointer" />
            ) : (
              <IoCheckmarkDone className="text-white cursor-pointer" />
            )}
          </button>
        </div>

        <button
          className="bg-blue-500 text-white p-2 rounded-md"
          onClick={() => handleEdit(item.id, item.name)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white p-2 rounded-md"
          onClick={() => handleDelete(item.id)}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default DataCard;
