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
import { UserExerciseInterface } from 'src/interfaces/user.exercise.interface';
import { Exercise } from './exercise.entity';
import { User } from './user.entity';

@Table
export class UserExercise extends Model implements UserExerciseInterface {
    @ForeignKey(() => User)
    @PrimaryKey
    @Column
    userId: number;

    @ForeignKey(() => Exercise)
    @PrimaryKey
    @Column
    exerciseId: number;
}