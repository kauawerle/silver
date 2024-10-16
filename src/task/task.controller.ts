import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { TaskDto } from './task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
    
    constructor(private readonly taskService: TaskService) {}

    @Post()
    create(@Body() task: TaskDto) {
        return this.taskService.create(task);
    }

    // @Get('/:id')
    // findById(@Param('id') id: string) {
    //     return this.taskService.findById(id);
    // }


    // @Put()
    // update(@Body() task: TaskDto) {
    //     return this.taskService.update(task);
    // }
}
