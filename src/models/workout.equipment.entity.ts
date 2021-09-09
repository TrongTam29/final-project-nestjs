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
import { WorkoutEquipmentInterace } from 'src/interfaces/workout.equipment.interface';

@Table
export class WorkoutEquipment extends Model implements WorkoutEquipmentInterace {
    @AutoIncrement
    @PrimaryKey
    @Column
    id: number;

    @Column
    name: string;

    @Column({ type: DataType.STRING(1000) })
    link: string;

    @Column
    image: string;
}