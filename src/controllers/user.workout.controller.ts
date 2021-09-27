import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Put,
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

    @Delete('delete')
    async Delete45(@Query('id') id: number): Promise<any> {
        return this.UserWorkoutService.delete(id);
    }

    @Post('create-user-workout')
    async createUserWorkout(@Body() userWorkout: UserWorkout): Promise<UserWorkout> {
        return await this.UserWorkoutService.createUserWorkout(userWorkout);
    }

    @Get('check-user-workout')
    async checkUserWorkout(@Query('userId') userId: number): Promise<any> {
        var value = await this.UserWorkoutService.checkWorkout(userId);
        if (value != null) { return false; } else return true;

    }

    @Get('get-user-workout')
    async getUserWorkout(@Query('userId') userId: number): Promise<UserWorkout> {
        return await this.UserWorkoutService.selectWorkout(userId);
    }

    @Put('update-user-workout')
    async updateUserWorkout(@Query('userId') userId: number, @Body() userWorkout: UserWorkout): Promise<[number, UserWorkout[]]> {
        return await this.UserWorkoutService.updateWorkout(userId, userWorkout);
    }

    @Patch('update-monday')
    async updateMonday(@Body() body: { userId: number, monday: string[] }): Promise<[number, UserWorkout[]]> {
        const { userId, monday } = body
        return await this.UserWorkoutService.updateMonday(userId, monday);
    }

    @Patch('update-tuesday')
    async updateTuesday(@Body() body: { userId: number, tuesday: string[] }): Promise<[number, UserWorkout[]]> {
        const { userId, tuesday } = body
        return await this.UserWorkoutService.updateTuesday(userId, tuesday);
    }

    @Patch('update-wednesday')
    async updateWednesday(@Body() body: { userId: number, wednesday: string[] }): Promise<[number, UserWorkout[]]> {
        const { userId, wednesday } = body
        return await this.UserWorkoutService.updateWednesday(userId, wednesday);
    }

    @Patch('update-thursday')
    async updateThursday(@Body() body: { userId: number, thursday: string[] }): Promise<[number, UserWorkout[]]> {
        const { userId, thursday } = body
        return await this.UserWorkoutService.updateThursday(userId, thursday);
    }

    @Patch('update-friday')
    async updateFriday(@Body() body: { userId: number, friday: string[] }): Promise<[number, UserWorkout[]]> {
        const { userId, friday } = body
        return await this.UserWorkoutService.updateFriday(userId, friday);
    }

    @Patch('update-saturday')
    async updateSaturday(@Body() body: { userId: number, saturday: string[] }): Promise<[number, UserWorkout[]]> {
        const { userId, saturday } = body
        return await this.UserWorkoutService.updateSaturday(userId, saturday);
    }
}
