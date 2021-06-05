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
import { UserExercise } from 'src/models/user.exercise.entity';
import { UserExerciseService } from 'src/services/user.exercise.service';
import AppResponse from 'src/utils/app.response';

@Controller('user-exercise')
export class UserExerciseController {
    constructor(private readonly userExerciseService: UserExerciseService) { }

    @Get('user-exercise')
    async getAllUserExercises(): Promise<UserExercise[]> {
        return this.userExerciseService.getAll();
    }

    @Post('create-user-exercise')
    async createUserExercise(@Body() userExercise: UserExercise): Promise<AppResponse<UserExercise>> {
        const response = new AppResponse<UserExercise>();
        response.data = await this.userExerciseService.createUserExercise(userExercise);
        response.success = true;
        response.message = 'Successfully';
        response.status = 200;
        return response;
    }

}
