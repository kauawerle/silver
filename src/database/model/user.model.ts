import {
    DataTypes,
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
} from '@sequelize/core';
import { Attribute, PrimaryKey, AutoIncrement, NotNull, Table } from '@sequelize/core/decorators-legacy';
import { UUID } from 'crypto';
import { UserAccess } from 'src/enum/access-user';

@Table
export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    @Attribute(DataTypes.UUIDV4)
    @PrimaryKey
    @AutoIncrement
    declare id: CreationOptional<UUID>;

    @Attribute(DataTypes.STRING)
    @NotNull
    declare name: string;

    @Attribute(DataTypes.STRING)
    @NotNull
    declare email: string;

    @Attribute(DataTypes.STRING)
    @NotNull
    declare password: string;

    @Attribute(DataTypes.ENUM)
    declare access: UserAccess;
}