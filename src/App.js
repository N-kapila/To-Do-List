import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddTaskForm from "./Components/AddTaskForm";
import UpdateForm from "./Components/UpdateForm";
import ToDo from "./Components/ToDo";

function App() {
  //ToDo list
  const [toDo, setToDo] = useState([]);

  //Temp State
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  //Add task
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
      setNewTask("");
    }
  };

  //Delete task
  const deleteTask = (id) => {
    let newTasks = toDo.filter((task) => task.id !== id);
    setToDo(newTasks);
  };

  //Mark as task done
  const markDone = (id) => {
    let newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(newTask);
    console.log(newTask);
  };

  //Cancel update
  const cancelUpdate = () => {
    setUpdateData("");
  };

  //Change task for uodate
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };

  //Update task
  const updateTask = () => {
    let filteRecords = [...toDo].filter((task) => task.id !== updateData.id);
    let updateObject = [...filteRecords, updateData];
    setToDo(updateObject);
    setUpdateData("");
  };

  return (
    <div className="container App">
      <br></br>
      <h2>To Do List </h2>
      <br></br>

      {updateData && updateData ? (
        <UpdateForm
          updateData={updateData}
          updateTask={updateTask}
          changeTask={changeTask}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />
      )}

      {/*Display ToDos*/}
      {toDo && toDo.length ? "" : "No tasks..."}
      <ToDo
        toDo={toDo}
        markDone={markDone}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
