import {
    AutoIncrement,
    BelongsTo,
    Column,
    ForeignKey,
    Model,
    PrimaryKey,
    Table,
} from 'sequelize-typescript';
import { ExerciseCommentInterface } from '../interfaces/exercise.comment.interface';
import { Exercise } from './exercise.entity';
import { User } from './user.entity';

@Table
export class ExerciseComment extends Model implements ExerciseCommentInterface {
    @AutoIncrement
    @PrimaryKey
    @Column
    id: number;

    @ForeignKey(() => User)
    @Column
    userId: number;

    @ForeignKey(() => Exercise)
    @Column
    exerciseId: number;

    @Column
    comment: string;

    @BelongsTo(() => Exercise)
    exercise: Exercise;

    @BelongsTo(() => User)
    user: User;
}
