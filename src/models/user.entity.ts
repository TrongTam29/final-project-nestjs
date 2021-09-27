import {
    AutoIncrement,
    BelongsTo,
    BelongsToMany,
    Column,
    ForeignKey,
    HasMany,
    HasOne,
    IsEmail,
    Model,
    PrimaryKey,
    Table,
    Unique,
} from 'sequelize-typescript';
import { UserInterface } from 'src/interfaces/user.interface';
import { ExerciseComment } from './exercise.comment.entity';
import { Exercise } from './exercise.entity';
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
    email: string;

    @Column
    image: string;

    @HasOne(() => UserWorkout)
    userWorkout: UserWorkout;

    @HasMany(() => ExerciseComment)
    exerciseComment: ExerciseComment;
}
