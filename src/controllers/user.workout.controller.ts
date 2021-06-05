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
import { UserWorkout } from 'src/models/user.workout.entity';
import { UserWorkoutService } from 'src/services/user.workout.service';
import AppResponse from 'src/utils/app.response';

@Controller('user-workout')
export class UserWorkoutController {
    constructor(private readonly UserWorkoutService: UserWorkoutService) { }

    @Get('user-workout')
    async getAllUserWorkouts(): Promise<UserWorkout[]> {
        return this.UserWorkoutService.getAll();
    }

    @Post('create-user-workout')
    async createUserWorkout(@Body() userWorkout: UserWorkout): Promise<AppResponse<UserWorkout>> {
        const response = new AppResponse<UserWorkout>();
        response.data = await this.UserWorkoutService.createUserWorkout(userWorkout);
        response.success = true;
        response.message = 'Successfully';
        response.status = 200;
        return response;
    }

}
