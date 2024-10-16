import { UUID } from "crypto";
import { TaskPriorityEnum } from "src/enum/priority";
import { TaskStatusEnum } from "src/enum/task.enum";

export class TaskDto {
    title: string;
    description: string;
    status: TaskStatusEnum;
    due_date: Date;
    priority: TaskPriorityEnum
}