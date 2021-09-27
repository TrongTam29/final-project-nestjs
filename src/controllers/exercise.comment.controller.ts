import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Query,
    Req,
    UseGuards,
} from '@nestjs/common';
import { createExerciseComment } from 'src/interfaces/exercise.comment.interface';
import { ExerciseComment } from 'src/models/exercise.comment.entity';
import { ExerciseCommentService } from 'src/services/exercise.comment.service';

@Controller('exercise-comment')
export class ExerciseCommentController {
    constructor(private readonly exerciseCommentService: ExerciseCommentService) { }

    @Get('exercise-comment')
    async getAllExerciseComment(): Promise<ExerciseComment[]> {
        return this.exerciseCommentService.findAll();
    }

    @Delete('delete')
    async delete(@Query('id') id: number): Promise<any> {
        return this.exerciseCommentService.delete(id);
    }
    @Post('create-exercise-comment')
    async createExerciseComment(@Body() exerciseComment: createExerciseComment): Promise<ExerciseComment> {
        return await this.exerciseCommentService.createExerciseComment(exerciseComment.exerciseId,
            exerciseComment.userId, exerciseComment.comment);
    }

    @Get('list-comment')
    async findCommentByExerciseId(@Query('exericseId') exerciseId: number): Promise<ExerciseComment[]> {
        return await this.exerciseCommentService.findCommentbyExerciseId(exerciseId);
    }
}
