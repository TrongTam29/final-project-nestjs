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
import { CategoryInterface } from 'src/interfaces/category.interface';
import { MuscleGroup } from './muscle.group.entity';

@Table
export class Category extends Model implements CategoryInterface {
    @PrimaryKey
    @Column
    id: number;

    @Column
    name: string;

    @Column
    image: string;

    @HasMany(() => MuscleGroup)
    muscleGroups: MuscleGroup[];
}