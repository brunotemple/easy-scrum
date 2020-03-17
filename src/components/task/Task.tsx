import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Draggable } from "react-beautiful-dnd";
import { TaskInfo } from "./types";
import { Paper, Typography } from "@material-ui/core";

type Props = {
    task: TaskInfo;
    index: number;
};

const useStyles = makeStyles(() => ({
    taskContainer: {
        minHeight: 40,
        padding: 4,
        display: "flex",
        alignItems: "center"
    }
}));

const Task: React.FC<Props> = props => {
    const classes = useStyles();
    return (
        <Draggable draggableId={props.task.id.toString()} index={props.index}>
            {provided => (
                <Paper
                    className={classes.taskContainer}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <Typography>{props.task.description}</Typography>
                </Paper>
            )}
        </Draggable>
    );
};

export default Task;
