import { FaCheck, FaEdit, FaTrash } from "react-icons/fa";
import { MdUndo } from "react-icons/md";
import { IoCheckmarkDone } from "react-icons/io5";

const DataCard = ({ item, handleComplete, handleDelete, handleEdit }) => {
  return (
    <>
      <div
        className={`flex flex-col gap-4 rounded-xl border p-4 shadow-md transition sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-3 sm:p-5 ${
          item.isCompleted
            ? "border-slate-200/60 bg-slate-50/80"
            : "border-slate-200 bg-white hover:border-blue-200 hover:shadow-lg"
        }`}
      >
        <h2
          className={`min-w-0 flex-1 text-lg font-semibold sm:text-xl ${
            item.isCompleted
              ? "text-slate-800 decoration-slate-400/80 decoration-2 "
              : "text-slate-400 opacity-70"
          }`}
        >
          {item.name}
        </h2>
        <div className="flex min-w-[100px] flex-wrap items-center justify-end gap-3 sm:gap-4">
          {item.isCompleted && (
            <FaCheck className="h-4 w-4 shrink-0 text-emerald-500" />
          )}
          <button
            className={`flex h-10 w-10 items-center justify-center rounded-lg text-white shadow-sm transition hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              item.isCompleted
                ? "bg-amber-500 hover:bg-amber-600 focus:ring-amber-500/50"
                : "bg-emerald-500 hover:bg-emerald-600 focus:ring-emerald-500/50"
            }`}
            onClick={() => handleComplete(item.id)}
          >
            {item.isCompleted ? (
              <MdUndo className="h-5 w-5 cursor-pointer text-white" />
            ) : (
              <IoCheckmarkDone className="h-5 w-5 cursor-pointer text-white" />
            )}
          </button>
        </div>

        <button
          className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2"
          onClick={() => handleEdit(item.id, item.name)}
        >
          <FaEdit className="h-3.5 w-3.5" />
          Edit
        </button>
        <button
          className="flex items-center justify-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-red-600 hover:shadow-md active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:ring-offset-2"
          onClick={() => handleDelete(item.id)}
        >
          <FaTrash className="h-3.5 w-3.5" />
          Delete
        </button>
      </div>
    </>
  );
};

export default DataCard;
