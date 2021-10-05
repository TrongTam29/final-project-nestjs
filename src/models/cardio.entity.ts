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
import { CardioInterface } from 'src/interfaces/cardio.interface';

@Table
export class Cardio extends Model implements CardioInterface {
    @AutoIncrement
    @PrimaryKey
    @Column
    id: number;

    @Column
    name: string;

    @Column
    image: string;

    @Column
    link: string

    @Column
    duration: string

    @Column
    exerTime: string

    @Column
    breakTime: string

    @Column
    focus: string
}