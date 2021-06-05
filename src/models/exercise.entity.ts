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
import { ExerciseInterface } from 'src/interfaces/exercise.interface';
import { MuscleGroup } from './muscle.group.entity';
import { User } from './user.entity';
import { UserExercise } from './user.exercise.entity';

@Table
export class Exercise extends Model implements ExerciseInterface {
    @AutoIncrement
    @PrimaryKey
    @Column
    id: number;

    @Column
    name: string;

    @Column
    link: string;

    @Column
    reps: string;

    @Column
    sets: string;

    @Column
    break: string;

    @Column
    detail: string;

    @ForeignKey(() => MuscleGroup)
    @Column
    muscleGroupId: number;

    @BelongsTo(() => MuscleGroup)
    muscleGroup: MuscleGroup;

    @HasMany(() => UserExercise)
    userExercises: UserExercise[];

    @BelongsToMany(() => User, () => UserExercise)
    users: User[];
}