import { Module } from '@nestjs/common';
import { ExerciseController } from 'src/controllers/exercise.controller';
import { exerciseProviders } from 'src/providers/exercise.provider';
import { ExerciseService } from 'src/services/exercise.service';
import { DatabaseModule } from './database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [ExerciseController],
    providers: [
        ExerciseService,
        ...exerciseProviders
    ],
})
export class ExerciseModule { }
