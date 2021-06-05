import { Module } from '@nestjs/common';
import { UserExerciseController } from 'src/controllers/user.exercise.controller';
import { userExerciseProviders } from 'src/providers/user.exercise.provider';
import { UserExerciseService } from 'src/services/user.exercise.service';
import { DatabaseModule } from './database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [UserExerciseController],
    providers: [
        UserExerciseService,
        ...userExerciseProviders
    ],
})
export class UserExerciseModule { }
