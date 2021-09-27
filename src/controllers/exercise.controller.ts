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
import { link } from 'fs';
import { Exercise } from 'src/models/exercise.entity';
import { ExerciseService } from 'src/services/exercise.service';
import AppResponse from 'src/utils/app.response';

@Controller('exercise')
export class ExerciseController {
    constructor(private readonly exerciseService: ExerciseService) { }

    @Get('exercises')
    async getAllExercises(): Promise<Exercise[]> {
        return this.exerciseService.getAll();
    }

    @Delete('delete')
    async Delete45(@Query('id') id: number): Promise<any> {
        return this.exerciseService.delete(id);
    }

    @Post('create-exercise')
    async createExercise(@Body() exercise: Exercise): Promise<Exercise> {
        return this.exerciseService.createExercise(exercise);
    }

    //Find exercises in a muscle group
    @Get('find-exercises')
    async findMuscle(@Query('id') id: number): Promise<Exercise[]> {
        return this.exerciseService.findAllExerciseById(id);
    }

    @Get('find-exercise-by-link')
    async findExerciseById(@Query('link') link: string): Promise<Exercise> {
        return this.exerciseService.findExerciseByLink(link);
    }
}
