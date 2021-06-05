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
import { MuscleGroupInterface } from 'src/interfaces/muscle.group.interface';
import { Category } from './category.entity';
import { Exercise } from './exercise.entity';

@Table
export class MuscleGroup extends Model implements MuscleGroupInterface {
    @PrimaryKey
    @Column
    id: number;

    @Column
    name: string;

    @Column
    image: string;

    @ForeignKey(() => Category)
    @Column
    categoryId: number;

    @BelongsTo(() => Category)
    category: Category;

    @HasMany(() => Exercise)
    exercises: Exercise[];

}