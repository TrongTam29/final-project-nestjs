import {
    Body,
    Controller,
    Get,
    Param,
    Patch,
    Post,
    Query,
    Req,
    UseGuards,
} from '@nestjs/common';
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

    @Post('create-exercise')
    async createExercise(@Body() exercise: Exercise): Promise<AppResponse<Exercise>> {
        const response = new AppResponse<Exercise>();
        response.data = await this.exerciseService.createExercise(exercise);
        response.success = true;
        response.message = 'Successfully';
        response.status = 200;
        return response;
    }

}
