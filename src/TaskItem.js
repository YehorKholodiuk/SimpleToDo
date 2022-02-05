import React, {useState} from 'react';

const TaskItem = (props) => {
    const [openEditForm,setOpenEditForm] = useState(false)
    return (
        <li>
            {props.task.task}
            <button onClick={() => props.deleteThisTask(props.task.id)}>Delete this</button>
            <button onClick={() => setOpenEditForm(!openEditForm)}>Update it</button>
            { openEditForm &&<div>

                <input type="text"/>
                <button>Save</button>
                <button>Cancel</button>

            </div>}

        </li>
    );
};

export default TaskItem;