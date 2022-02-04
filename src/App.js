import logo from './logo.svg';
import './App.css';
import {nanoid} from "nanoid";
import {useState} from "react";

function App() {
    const [tasks, setTasks] = useState([
        {
            id: nanoid(),
            task: 'learn JavaScript'
        },
        {
            id: nanoid(),
            task: 'learn HTML'
        },
        {
            id: nanoid(),
            task: 'learn React'
        }
    ])
    const [newTaskInput, setNewTaskInput] = useState('')
    function addToList(){
        const newTask = {id: nanoid(), task:newTaskInput}
        setTasks([...tasks,newTask])
        setNewTaskInput('')
    }
    return (
        <div>
            <h1>To Do List</h1>
            <input type="text"
                   value ={newTaskInput}
                   onChange={(e) => setNewTaskInput(e.target.value)}
            />
            <button onClick={addToList}>Add To List</button>
            <ul>{tasks.map(e => <li>{e.task}</li>)}</ul>
        </div>
    );
}

export default App;
