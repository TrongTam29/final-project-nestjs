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
import { DayInterface } from 'src/interfaces/day.interface';
import { Diet } from './diet.entity';
import { Nutrition } from './nutrition.entity';

@Table
export class Day extends Model implements DayInterface {
    @AutoIncrement
    @PrimaryKey
    @Column
    id: number;

    @Column
    name: string;

    @ForeignKey(() => Nutrition)
    @Column
    nutritionId: number;

    @BelongsTo(() => Nutrition)
    nutrition: Nutrition;

    @HasMany(() => Diet)
    diets: Diet[];
}