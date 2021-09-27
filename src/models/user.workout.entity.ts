import {
    AutoIncrement,
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    HasOne,
    Model,
    PrimaryKey,
    Table,
} from 'sequelize-typescript';
import { UserWorkoutInterface } from 'src/interfaces/user.workout.interface';
import { User } from './user.entity';

@Table
export class UserWorkout extends Model implements UserWorkoutInterface {
    @AutoIncrement
    @PrimaryKey
    @Column
    id: number;

    @Column({ type: DataType.ARRAY(DataType.STRING) })
    monday: Array<String>;


    @Column({ type: DataType.ARRAY(DataType.STRING) })
    tuesday: Array<String>;


    @Column({ type: DataType.ARRAY(DataType.STRING) })
    wednesday: Array<String>;


    @Column({ type: DataType.ARRAY(DataType.STRING) })
    thursday: Array<String>;


    @Column({ type: DataType.ARRAY(DataType.STRING) })
    friday: Array<String>;


    @Column({ type: DataType.ARRAY(DataType.STRING) })
    saturday: Array<String>;

    @ForeignKey(() => User)
    userId: number;

    @BelongsTo(() => User)
    user: User;

}