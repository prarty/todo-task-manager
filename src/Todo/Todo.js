import React, {useState} from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import TextField from "@material-ui/core/TextField";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';

const Todo = () => {
    const [todoList, updateTodoList] = useState([1]);
    console.log("coubnr", todoList);
    return (<>
        <h1>Todo</h1>

        {todoList.map((i, index) =>
            (<List>
                <ListItem key={index} dense button onKeyDown={(e) => {
                    if(e.keyCode === 13){
                    updateTodoList(todoList.concat(todoList[index]+1))
                    }
                }}>
                    <ListItemIcon>
                        <Checkbox
                            edge="start"
                            tabIndex={-1}
                            disableRipple
                        />
                    </ListItemIcon>
                    <TextField/>
                    <ListItemSecondaryAction>
                        <IconButton aria-label="delete" >
                            <DeleteIcon onClick={(e) => {
                                let tempList  = todoList;
                                tempList.splice(index,1)
                                console.log("todo",todoList, "tmep", tempList);
                                updateTodoList(tempList);
                            }}/>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </List>))}
    </>);
};

export default Todo;