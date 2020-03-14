import { TaskStatus } from "./";

export type TaskInfo = {
    id: string;
    description: string;
    ownerId: string;
    statusId: TaskStatus["id"];
    typeId: string;
    taskNumber: number;
};
