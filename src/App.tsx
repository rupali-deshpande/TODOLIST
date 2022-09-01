import React, { ChangeEvent, useState } from 'react';
import './App.css';
import { Task } from '../src/Interface/Interface'
import { Todotask } from './component/Todotask';


function App() {

  const [task, setTask] = useState<string>("")
  const [deadline, setDeadline] = useState<number>(0)
  const [toDoList, setToDoList] = useState<Task[]>([])
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    }
    else {
      setDeadline(Number(event.target.value));
    }
    //setTask(event.target.value);
  };
  const addToList = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setToDoList([...toDoList, newTask]);
    console.log(toDoList)
    console.log(newTask)
    setTask("");
    setDeadline(0);
  }

  const completedTask = (taskNameDelete: string): void => {
    setToDoList(toDoList.filter((task) => {
      return (task.taskName !== taskNameDelete)
    }))

  }
  return (
    <div className="App">
      <div className='header'>
        <header >
          TO-DO TASK
        </header>
      </div>
      <div className="inputContainer">
        <label>TODO LIST</label>
        <input type="text" placeholder='TASK' value={task} name="task" onChange={handleChange} />
        <label>Deadline</label>
        <input type="number" placeholder='TODO' value={deadline} name="deadline" onChange={handleChange} />
      </div>
      <button onClick={addToList}>ADD TO TASK</button>
      <div>
        {toDoList.map((task: Task, key: number) => {
          return (
            <Todotask key={key} task={task} completeTask={completedTask} />)
        })}
      </div>
    </div>
  );
}

export default App;
