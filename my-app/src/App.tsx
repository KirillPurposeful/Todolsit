import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {
  let [tasks, setTasks] = useState([
    {id:'eqweeq', title:'Shrek',isDone: true},
    {id:'eqweeq1', title:'Shrek',isDone: true},
    {id:'eqweeq2', title:'Shrek',isDone: true},

  ])
  return (
    <div className="App">
    <Todolist tasks={tasks} title={'What to learn'} />
    </div>
  );
}

export default App;
