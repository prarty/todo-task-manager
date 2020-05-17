import React, {useState} from "react";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from '@material-ui/icons/Add';
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";

const TaskManager = () => {
    const [isAddFormVisible, setAddFormVisibility] = useState(false);
    return (<div>
        <h1>Task Manager</h1>
        <TaskList/>
        <IconButton onClick={() => setAddFormVisibility(true)}>
            <AddIcon/>
            Add Task
        </IconButton>
        {isAddFormVisible && (
            <AddTaskForm/>
        )}

    </div>)
};

export default TaskManager;