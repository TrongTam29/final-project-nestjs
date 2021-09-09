import {
    AutoIncrement,
    BelongsTo,
    BelongsToMany,
    Column,
    ForeignKey,
    HasMany,
    IsEmail,
    Model,
    PrimaryKey,
    Table,
    Unique,
} from 'sequelize-typescript';
import { UserInterface } from 'src/interfaces/user.interface';
import { Exercise } from './exercise.entity';
import { UserWorkout } from './user.workout.entity';

@Table
export class User extends Model implements UserInterface {
    @AutoIncrement
    @PrimaryKey
    @Column
    id: number;

    @Column
    account: string;

    @ForeignKey(() => UserWorkout)
    userWorkoutId: number;

    @BelongsTo(() => UserWorkout)
    userWorkout: UserWorkout;
}
