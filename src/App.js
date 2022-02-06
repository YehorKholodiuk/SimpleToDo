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

    const upTask = (id) => {
        const index = tasks.findIndex(el => el.id === id);
        const result = [...tasks.slice(0, index - 1), tasks[index], tasks[index - 1], ...tasks.slice(index + 1)]
        setTasks(result)
    }

    const downTask = (id) => {
        const index = tasks.findIndex(el => el.id === id);
        const result = [...tasks.slice(0, index), tasks[index + 1], tasks[index], ...tasks.slice(index + 2)]
        setTasks(result)
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
                                             downTask={downTask}
                                             upTask={upTask}
                />
            )}
            </ul>
        </div>
    );
}

export default App;
