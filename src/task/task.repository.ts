import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Task } from 'src/database/model/task.model';

@Injectable()
export class TaskRepository {
  constructor(
    @InjectModel(Task) private readonly taskModel: typeof Task,
  ) {}
}
