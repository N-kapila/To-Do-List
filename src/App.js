import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  //ToDo list
  const [toDo, setToDo] = useState([
    // { id: 1, title: "Task 1", status: false },
    // { id: 2, title: "Task 2", status: false },
  ]);

  //Temp State
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  //Add task
  const addTask = () => {};

  //Delete task
  const deleteTask = (id) => {};

  //Mark as task done
  const markDone = (id) => {};

  //Cancel update
  const cancelUpdate = () => {};

  //AChane task for uodate
  const changeTask = () => {};

  //Update task
  const updateTask = () => {};

  return (
    <div className="container App">
      <h2>To Do List App</h2>

      {toDo && toDo.length ? "" : "No tasks..."}
    </div>
  );
}

export default App;
