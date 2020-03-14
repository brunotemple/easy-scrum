import React from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { makeStyles } from "@material-ui/core/styles";

import { TaskStatus } from "../task/types";
import BoardColumn from "./BoardColumn";

// Populate Temporary Data
import { fakeTaskStatus, fakeTasks } from "../../fakeData";

const useStyles = makeStyles(() => ({
    container: {
        display: "flex"
    }
}));

const Board = () => {
    const classes = useStyles();

    const onDragEnd = (result: DropResult) => {
        console.log(result);
        console.log(fakeTaskStatus);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className={classes.container}>
                {fakeTaskStatus.map((status: TaskStatus) => (
                    <BoardColumn key={status.id} column={status} tasks={fakeTasks} />
                ))}
            </div>
        </DragDropContext>
    );
};

export default Board;