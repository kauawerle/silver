import {
    DataTypes,
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
} from '@sequelize/core';
import { Attribute, PrimaryKey, AutoIncrement, NotNull, HasMany, HasOne, BelongsTo, Table } from '@sequelize/core/decorators-legacy';
import { UUID } from 'crypto';

import { List } from './list.model';
import { TaskPriorityEnum } from 'src/enum/priority';

@Table
export class Project extends Model<InferAttributes<Project>, InferCreationAttributes<Project>> {
    @Attribute(DataTypes.UUIDV4)
    @PrimaryKey
    @AutoIncrement
    declare id: CreationOptional<UUID>;

    @Attribute(DataTypes.STRING)
    @NotNull
    declare title: string;

    @Attribute(DataTypes.STRING)
    @NotNull
    declare description: string;
    
    @Attribute(DataTypes.DATE)
    @NotNull
    declare due_date: Date

    @Attribute(DataTypes.ENUM)
    @NotNull
    declare priority: TaskPriorityEnum

    @Attribute(DataTypes.UUID)
    @NotNull
    declare projectId: UUID;

    @HasMany(() => List, 'listId')
    declare list: List[];
}