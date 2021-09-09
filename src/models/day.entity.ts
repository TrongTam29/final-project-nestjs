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
import { DayInterface } from 'src/interfaces/day.interface';
import { Nutrition } from './nutrition.entity';

@Table
export class Day extends Model implements DayInterface {
    @AutoIncrement
    @PrimaryKey
    @Column
    id: number;

    @Column
    name: string;

    @Column({ type: DataType.STRING(3000) })
    detail: string;

    @ForeignKey(() => Nutrition)
    @Column
    nutritionId: number;

    @BelongsTo(() => Nutrition)
    nutrition: Nutrition;
}