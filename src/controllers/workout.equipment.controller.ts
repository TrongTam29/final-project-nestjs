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
import { WorkoutEquipment } from 'src/models/workout.equipment.entity';
import { WorkoutEquipmentService } from 'src/services/workout.equipment';
import AppResponse from 'src/utils/app.response';

@Controller('workout-equipment')
export class WorkoutEquipmentController {
    constructor(private readonly workoutEquipmentService: WorkoutEquipmentService) { }

    @Get('workout-equipment')
    async getAllWorkoutEquipments(): Promise<WorkoutEquipment[]> {
        return this.workoutEquipmentService.getAll();
    }

    @Post('create-workout-equipment')
    async createWorkoutEquipment(@Body() WorkoutEquipment: WorkoutEquipment): Promise<AppResponse<WorkoutEquipment>> {
        const response = new AppResponse<WorkoutEquipment>();
        response.data = await this.workoutEquipmentService.createWorkoutEquipment(WorkoutEquipment);
        response.success = true;
        response.message = 'Successfully';
        response.status = 200;
        return response;
    }

}
