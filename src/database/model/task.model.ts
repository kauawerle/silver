import {
    DataTypes,
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
} from '@sequelize/core';
import { UUID } from '@sequelize/core/_non-semver-use-at-your-own-risk_/abstract-dialect/data-types.js';

import {
    Attribute,
    PrimaryKey,
    AutoIncrement,
    NotNull,
    Table
} from '@sequelize/core/decorators-legacy';

import { TaskPriorityEnum } from 'src/enum/priority';
import { TaskStatusEnum } from 'src/enum/task.enum';

@Table
export class Task extends Model<InferAttributes<Task>, InferCreationAttributes<Task>> {
    @Attribute(DataTypes.UUID)
    @PrimaryKey
    @AutoIncrement
    declare id: CreationOptional<UUID>;

    @Attribute(DataTypes.STRING)
    @NotNull
    declare title: string

    @Attribute(DataTypes.STRING)
    @NotNull
    declare description: string

    @Attribute(DataTypes.ENUM)
    @NotNull
    declare status: TaskStatusEnum

    @Attribute(DataTypes.ENUM)
    @NotNull
    declare priority: TaskPriorityEnum

    @Attribute(DataTypes.DATE)
    @NotNull
    declare due_date: Date

    @Attribute(DataTypes.UUID)
    @NotNull
    declare taskId: UUID;
}