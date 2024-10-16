import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { TaskDto } from './task.dto';
import { User } from 'src/database/model/user.model';
import { Task } from 'src/database/model/task.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class TaskService {

    constructor(
    @InjectModel(Task)
    private readonly taskModel: typeof Task,
  ) {}

    private tasks: TaskDto[] = [];

    async create(task: TaskDto) {
        return await this.taskModel.create(task);
    }

    // findById(id: string): TaskDto {
    //     const foundTask = this.tasks.filter(t => t.id === id);

    //     if (foundTask.length) {
    //         return foundTask[0];
    //     }

    //     throw new HttpException(`Task with id: ${id} not found`, HttpStatus.NOT_FOUND);
    // }

    // update(task: TaskDto) {
    //     let taskIndex = this.tasks.findIndex(t => t.id === task.id);

    //     if (taskIndex >= 0) {
    //         return this.tasks[taskIndex] = task;
    //     }

    //     throw new HttpException(`Task with id ${task.id} not found`, HttpStatus.BAD_REQUEST);
    // }

    // deleteById(id: string) {
    //     const foundTask = this.tasks.filter(t => t.id === id);
    //     this.tasks.splice(t => t.id === id)
    // }
}
