import React, { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { makeStyles } from "@material-ui/core/styles";
import { useQuery } from "@apollo/react-hooks";

import tasksQuery from "../../api/queries/Tasks";
import usersQuery from "../../api/queries/Users";
import taskTypeQuery from "../../api/queries/TaskType";
import taskStatusQuery from "../../api/queries/TaskStatus";
import { TaskStatus, TaskInfo } from "../task/types";
import { UserInfo } from "../user/types";
import BoardColumn from "./BoardColumn";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    boardContainer: {
        width: "100%",
        padding: 16
    },
    userContainer: {
        background: "lightgrey",
        border: "0.5px solid black",
        display: "flex",
        alignItems: "center",
        padding: 8,
        marginBottom: 4
    },
    userName: {
        width: 120
    },
    columnContainer: {
        display: "flex",
        alignItems: "center"
    }
}));

const init = {
    allTaskStatus: [],
    allTaskType: [],
    allTasks: [],
    allUsers: []
};

const Board = () => {
    const classes = useStyles();
    const tasksQueryResult = useQuery(tasksQuery);
    const usersQueryResult = useQuery(usersQuery);
    const taskTypeQueryResult = useQuery(taskTypeQuery);
    const taskStatusQueryResult = useQuery(taskStatusQuery);
    const [state, setState] = useState(init);

    if (
        tasksQueryResult.data &&
        state.allTasks === init.allTasks &&
        usersQueryResult.data &&
        state.allUsers === init.allUsers &&
        taskTypeQueryResult.data &&
        state.allTaskType === init.allTaskType &&
        taskStatusQueryResult.data &&
        state.allTaskStatus === init.allTaskStatus
    ) {
        setState({
            ...state,
            allTasks: tasksQueryResult.data.allTasks,
            allUsers: usersQueryResult.data.allUsers,
            allTaskType: taskTypeQueryResult.data.allTaskType,
            allTaskStatus: taskStatusQueryResult.data.allTaskStatus
        });
    }

    if (
        tasksQueryResult.loading ||
        usersQueryResult.loading ||
        taskTypeQueryResult.loading ||
        taskStatusQueryResult.loading
    ) {
        return <div>Loading...</div>;
    }
    if (tasksQueryResult.error || usersQueryResult.error || taskTypeQueryResult.error || taskStatusQueryResult.error) {
        return <div>Error Fetching Data...</div>;
    }

    const onDragEnd = (result: DropResult) => {
        console.log(result);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className={classes.boardContainer}>
                {state.allUsers.map((user: UserInfo) => (
                    <div className={classes.userContainer}>
                        <div>
                            <Typography className={classes.userName}>{`${user.firstName} ${user.lastName}`}</Typography>
                        </div>
                        <div className={classes.columnContainer}>
                            {state.allTaskStatus.map((status: TaskStatus) => (
                                <BoardColumn
                                    key={status.id}
                                    column={status}
                                    user={user}
                                    tasks={state.allTasks.filter((task: TaskInfo) => task.ownerId === user.id)}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </DragDropContext>
    );
};

export default Board;
