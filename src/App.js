import logo from './logo.svg';
import './App.css';
import {nanoid} from "nanoid";
import {useState} from "react";
import TaskItem from "./TaskItem";

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

    function addToList() {
        const newTask = {id: nanoid(), task: newTaskInput}
        setTasks([...tasks, newTask])
        setNewTaskInput('')
    }

    function deleteThisTask(id) {
        const updatedTasks = tasks.filter(e => e.id !== id)
        setTasks(updatedTasks)
    }

    function updateTask(task, id) {
        const updatedTasks = tasks.map(e => e.id === id ? {...e, task} : e)
        setTasks(updatedTasks)
    }

    return (
        <div>
            <h1>To Do List</h1>
            <input type="text"
                   value={newTaskInput}
                   onChange={(e) => setNewTaskInput(e.target.value)}
            />
            <button onClick={addToList} disabled={!newTaskInput}>Add To List</button>
            <ul>{tasks.map(task => <TaskItem task={task}
                                             deleteThisTask={deleteThisTask}
                                             updateTask={updateTask}

                />
            )}
            </ul>
        </div>
    );
}

export default App;
