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
import { DietInterface } from 'src/interfaces/diet.interface';
import { Day } from './day.entity';

@Table
export class Diet extends Model implements DietInterface {
    @AutoIncrement
    @PrimaryKey
    @Column
    id: number;

    @Column
    name: string;

    @Column
    detail: string;

    @ForeignKey(() => Day)
    @Column
    dayId: number;

    @BelongsTo(() => Day)
    day: Day;
}