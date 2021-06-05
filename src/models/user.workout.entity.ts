import {
    AutoIncrement,
    BelongsTo,
    BelongsToMany,
    Column,
    DataType,
    ForeignKey,
    HasMany,
    HasOne,
    IsEmail,
    Model,
    PrimaryKey,
    Table,
    Unique,
} from 'sequelize-typescript';
import { UserWorkoutInterface } from 'src/interfaces/user.workout.interface';
import { User } from './user.entity';

@Table
export class UserWorkout extends Model implements UserWorkoutInterface {
    @AutoIncrement
    @PrimaryKey
    @Column
    id: number;

    @Column({ type: DataType.ARRAY(DataType.NUMBER) })
    monday: Array<number>;

    @Column({ type: DataType.ARRAY(DataType.NUMBER) })
    tuesday: Array<number>;

    @Column({ type: DataType.ARRAY(DataType.NUMBER) })
    wednesday: Array<number>;

    @Column({ type: DataType.ARRAY(DataType.NUMBER) })
    thursday: Array<number>;

    @Column({ type: DataType.ARRAY(DataType.NUMBER) })
    friday: Array<number>;

    @Column({ type: DataType.ARRAY(DataType.NUMBER) })
    saturday: Array<number>;

    @HasOne(() => User)
    user: User;
}