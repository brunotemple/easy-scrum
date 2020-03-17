import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { makeStyles } from "@material-ui/core/styles";
//import { Typography } from "@material-ui/core";

import { TaskStatus, TaskInfo } from "../task/types";
import Task from "../task/Task";
import { UserInfo } from "../user/types";

const useStyles = makeStyles(() => ({
    container: {
        border: "1px solid black",
        width: 220,
        minHeight: 150,
        margin: 8,
        padding: 8
    }
}));

type Props = {
    column: TaskStatus;
    tasks: TaskInfo[];
    user: UserInfo;
};

const BoardColumn: React.FC<Props> = props => {
    const classes = useStyles();

    const filteredTasks = props.tasks.filter((task: TaskInfo) => task.statusId === props.column.id);

    return (
        <div className={classes.container}>
            <Droppable droppableId={`${props.column.id}_${props.user.id}`}>
                {provided => (
                    <div ref={provided.innerRef}>
                        {filteredTasks.map((task: TaskInfo, index: number) => (
                            <Task key={task.id} task={task} index={index} />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
};

export default BoardColumn;
