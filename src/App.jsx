import { useState } from "react";
import Headers from "./components/Headers";
import DataList from "./components/DataList";

function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [taskStatus, setTaskStatus] = useState(false);

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleAdd = () => {
    setData([
      ...data,
      { id: data.length + 1, name: input, isCompleted: taskStatus },
    ]);
    setInput("");
    setTaskStatus(false);
  };
  return (
    <>
      <Headers />
      <section>
        <div>
          <label htmlFor="task-name">Task Name</label>
          <input
            id="task-name"
            type="text"
            value={input}
            onChange={handleInput}
            placeholder="Enter task name"
          />
          <label htmlFor="task-status">Task Status</label>
          <select
            id="task-status"
            value={taskStatus}
            onChange={(e) => setTaskStatus(e.target.value === "true")}
          >
            <option value={"true"}>Completed</option>
            <option value={"false"}>Not Completed</option>
          </select>
          <button onClick={handleAdd}>Add</button>
        </div>
        {data.length > 0 ? (
          <div>
            <DataList data={data} />
          </div>
        ) : null}
      </section>
    </>
  );
}

export default App;
