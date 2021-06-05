import { Module } from '@nestjs/common';
import { UserController } from 'src/controllers/user.controller';
import { WorkoutEquipmentController } from 'src/controllers/workout.equipment.controller';
import { userProviders } from 'src/providers/user.provider';
import { workoutEquipmentProviders } from 'src/providers/workoutEquipment.provider';
import { UserService } from 'src/services/user.service';
import { WorkoutEquipmentService } from 'src/services/workout.equipment';
import { DatabaseModule } from './database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [WorkoutEquipmentController],
    providers: [
        WorkoutEquipmentService,
        ...workoutEquipmentProviders
    ],
})
export class WorkoutEquipmentModule { }
