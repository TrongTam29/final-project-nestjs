import { text } from 'express';
import {
    AutoIncrement,
    BelongsTo,
    BelongsToMany,
    Column,
    DataType,
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
    image: string;

    @Column
    reps: string;

    @Column
    sets: string;

    @Column
    break: string;

    @Column({ type: DataType.STRING(1000) })
    detail: string;

    @ForeignKey(() => MuscleGroup)
    @Column
    muscleGroupId: number;

    @BelongsTo(() => MuscleGroup)
    muscleGroup: MuscleGroup;

}

