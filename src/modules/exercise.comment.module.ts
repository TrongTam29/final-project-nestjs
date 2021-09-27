import { Module } from '@nestjs/common';
import { CardioController } from 'src/controllers/cardio.controller';
import { ExerciseCommentController } from 'src/controllers/exercise.comment.controller';
import { cardioProviders } from 'src/providers/cardio.provider';
import { exerciseCommentProviders } from 'src/providers/exercise.comment.provider';
import { CardioService } from 'src/services/cardio.service';
import { ExerciseCommentService } from 'src/services/exercise.comment.service';
import { DatabaseModule } from './database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [ExerciseCommentController],
    providers: [
        ExerciseCommentService,
        ...exerciseCommentProviders
    ],
})
export class ExerciseCommentModule { }
