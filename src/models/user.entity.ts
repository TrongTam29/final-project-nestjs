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
import { UserExercise } from './user.exercise.entity';
import { UserWorkout } from './user.workout.entity';

@Table
export class User extends Model implements UserInterface {
    @AutoIncrement
    @PrimaryKey
    @Column
    id: number;

    @Column
    name: string;

    @Column
    account: string;

    @Column
    password: string;

    @Column
    image: string;

    @ForeignKey(() => UserWorkout)
    userWorkoutId: number;

    @HasMany(() => UserExercise)
    userExercises: UserExercise[];

    @BelongsToMany(() => Exercise, () => UserExercise)
    exercises: Exercise[];

    @BelongsTo(() => UserWorkout)
    userWorkout: UserWorkout;
}
