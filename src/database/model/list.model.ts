import {
    DataTypes,
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
} from '@sequelize/core';
import { Attribute, PrimaryKey, AutoIncrement, NotNull, HasMany, HasOne, Table } from '@sequelize/core/decorators-legacy';
import { UUID } from 'crypto';
import { Task } from './task.model';
import { Project } from './project.model';

@Table
export class List extends Model<InferAttributes<List>, InferCreationAttributes<List>> {
    @Attribute(DataTypes.UUIDV4)
    @PrimaryKey
    @AutoIncrement
    declare id: CreationOptional<UUID>;

    @Attribute(DataTypes.STRING)
    @NotNull
    declare description: string;
    
    @Attribute(DataTypes.UUID)
    @NotNull
    declare listId: UUID;

    @HasMany(() => Task, 'taskId')
    declare tasks: Task[];

    @HasOne(() => Project, 'projectId')
    declare project: UUID
}