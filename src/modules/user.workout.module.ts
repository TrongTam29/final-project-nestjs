import { Module } from '@nestjs/common';
import { UserWorkoutController } from 'src/controllers/user.workout.controller';
import { userWorkoutProviders } from 'src/providers/user.workout.provider';
import { UserWorkoutService } from 'src/services/user.workout.service';
import { DatabaseModule } from './database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [UserWorkoutController],
    providers: [
        UserWorkoutService,
        ...userWorkoutProviders
    ],
})
export class UserWorkoutModule { }
