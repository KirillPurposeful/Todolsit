import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {
  let [tasks, setTasks] = useState([
    {id:'eqweeq', title:'Shrek',isDone: true},
    {id:'eqweeq1', title:'Shrek',isDone: true},
    {id:'eqweeq2', title:'Shrek',isDone: true},

  ])

  function removeTask(id:string) {
    let filteredTasks = tasks.filter((t)=>
   t.id !== id
    )
    setTasks(filteredTasks);
  }

  return (
    <div className="App">
    <Todolist tasks={tasks} title={'What to learn'} removeTask={removeTask} />
    </div>
  );
}

export default App;
