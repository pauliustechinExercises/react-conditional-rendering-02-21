import { useState } from "react";

const DynamicLists = () => {

  const [tasks, setTasks] = useState([]);

  const addTask = () => {

    const tasks = ["do dishes", "go for a walk", "go to the shop"]

    setTasks([...tasks]);
  }

  const clearTasks = () => {
    setTasks(["No tasks available"])
  }

  return (
    <div className="border">
      <p>**Exercise 5: Dynamic Lists with Conditional Rendering**</p>
      <p>
        Display a list of tasks, but: - Show "No tasks available" if the `tasks`
        array is empty. - Render each task in the list if the array has items.
      </p>

      <div className="border w-full p-2">
        <button onClick={addTask} className="border pl-4 pr-4 rounded-lg m-2 shadow">Add tasks</button>
        <button onClick={clearTasks} className="border pl-4 pr-4 rounded-lg m-2 shadow">Clear tasks</button>
        <ul>
          {tasks.map((task,index) => {
            return <li key={index}>{task}</li>
          })}
        </ul>
      </div>
    </div>
  );
};

export default DynamicLists;
