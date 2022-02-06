import React, {useState} from 'react';

const TaskItem = (props) => {
    const [openEditForm,setOpenEditForm] = useState(false);
    const [taskToUpdate, setTaskToUpdate] = useState(props.task.task);

    function saveButtonHandler(){
        props.updateTask(taskToUpdate,props.task.id);
        setOpenEditForm(!openEditForm)
    }
    return (
        <li>
            {props.task.task}
            <button onClick={() => props.deleteThisTask(props.task.id)}>Delete this</button>
            { !openEditForm && <button onClick={() => setOpenEditForm(!openEditForm)}>Update it</button>}
            {props.index !== 0 ? <button onClick={() => props.upTask(props.task.id)}>Up</button> : null}
            {props.index !== props.task.length - 1 ? <button onClick={() => props.downTask(props.task.id)}>Down</button> : null}
            { openEditForm &&<div>

                <input type="text" value={taskToUpdate} onChange={e => setTaskToUpdate(e.target.value)}/>
                <button onClick={saveButtonHandler}>Save</button>

                <button onClick={() => setOpenEditForm(!openEditForm)} >Cancel</button>

            </div>}

        </li>
    );
};

export default TaskItem;
