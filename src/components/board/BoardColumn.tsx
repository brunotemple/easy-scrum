import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper } from "@material-ui/core";

import { TaskStatus, TaskInfo } from "../task/types";
import Task from "../task/Task";

const useStyles = makeStyles(() => ({
    container: {}
}));

type Props = {
    column: TaskStatus;
    tasks: TaskInfo[];
};

const BoardColumn: React.FC<Props> = props => {
    const classes = useStyles();

    return (
        <Paper className={classes.container}>
            <Typography>{props.column.title}</Typography>
            <Droppable droppableId={props.column.id}>
                {provided => (
                    <div ref={provided.innerRef}>
                        {props.tasks.map((task: TaskInfo, index: number) => (
                            <Task key={task.id} task={task} index={index} />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </Paper>
    );
};

export default BoardColumn;
