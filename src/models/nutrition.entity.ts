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
import { NutritionInterface } from 'src/interfaces/nutrition.interface';
import { Day } from './day.entity';

@Table
export class Nutrition extends Model implements NutritionInterface {
    @AutoIncrement
    @PrimaryKey
    @Column
    id: number;

    @Column
    name: string;

    @Column
    detail: string;

    @HasMany(() => Day)
    days: Day[];
}