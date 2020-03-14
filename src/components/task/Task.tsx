import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { TaskInfo } from "./types";
import { Paper, Typography } from "@material-ui/core";

type Props = {
    task: TaskInfo;
    index: number;
};

const Task: React.FC<Props> = props => {
    return (
        <Draggable draggableId={props.task.id.toString()} index={props.index}>
            {provided => (
                <Paper {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                    <Typography>{props.task.description}</Typography>
                </Paper>
            )}
        </Draggable>
    );
};

export default Task;
