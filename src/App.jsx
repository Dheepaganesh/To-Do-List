import { useState } from "react";
import Headers from "./components/Headers";
import DataList from "./components/DataList";

function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);
  const [taskStatus, setTaskStatus] = useState(false);

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleAdd = () => {
    if (input.trim() === "") {
      alert("Please enter a task name");
      return;
    }
    setData([
      ...data,
      { id: data.length + 1, name: input, isCompleted: taskStatus },
    ]);
    setInput("");
    setTaskStatus(false);
  };
  const handleComplete = (id) => {
    setData(
      data.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item,
      ),
    );
  };
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const handleEdit = (id) => {
    setEditId(id);
    const updatedData = data.filter((item) => item.id === id)?.[0];
    setInput(updatedData?.name);
    setTaskStatus(updatedData?.isCompleted);
  };

  const handleUpdate = () => {
    setData(
      data.map((item) =>
        item.id === editId
          ? { ...item, name: input, isCompleted: taskStatus }
          : item,
      ),
    );
    setEditId(null);
    setInput("");
    setTaskStatus(false);
  };
  return (
    <>
      <Headers />
      <section
        className={`mx-auto flex min-h-[calc(100vh-5.5rem)] max-w-6xl flex-col gap-6 p-4 sm:p-6 lg:flex-row lg:items-start lg:gap-8 ${data.length > 0 ? "lg:justify-between" : "justify-center"}`}
      >
        <div className="flex w-full shrink-0 flex-col items-stretch gap-4 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg shadow-slate-200/60 sm:p-8 lg:w-[min(100%,22rem)]">
          <label
            htmlFor="task-name"
            className="text-sm font-medium text-slate-600"
          >
            Task Name
          </label>
          <input
            id="task-name"
            type="text"
            className="w-full max-w-md rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-slate-800 shadow-sm transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            value={input}
            onChange={handleInput}
            placeholder="Enter task name"
          />
          <label
            htmlFor="task-status"
            className="text-sm font-medium text-slate-600"
          >
            Task Status
          </label>
          <select
            id="task-status"
            className="w-full max-w-md cursor-pointer rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-slate-800 shadow-sm transition focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            value={taskStatus}
            onChange={(e) => setTaskStatus(e.target.value === "true")}
          >
            <option value={"true"}>Completed</option>
            <option value={"false"}>Not Completed</option>
          </select>
          <button
            onClick={editId ? handleUpdate : handleAdd}
            className="w-full max-w-md rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-blue-500/30 transition hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg hover:shadow-blue-500/40 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2"
          >
            {editId ? "Update" : "Add"}
          </button>
        </div>
        {data.length > 0 ? (
          <div
            className={
              data.length > 0
                ? `flex w-full flex-1 flex-col gap-4 rounded-2xl border border-blue-100/80 bg-white/90 p-6 shadow-lg shadow-blue-100/50 backdrop-blur-sm sm:p-8`
                : `hidden`
            }
          >
            <DataList
              data={data}
              handleComplete={handleComplete}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          </div>
        ) : null}
      </section>
    </>
  );
}

export default App;
