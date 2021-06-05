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
import { MuscleGroup } from 'src/models/muscle.group.entity';
import { MuscleGroupService } from 'src/services/muscle.group.service';
import AppResponse from 'src/utils/app.response';

@Controller('muscleGroup')
export class MuscleGroupController {
    constructor(private readonly muscleGroupService: MuscleGroupService) { }

    @Get('muscle-groups')
    async getAllMuscleGroups(): Promise<MuscleGroup[]> {
        return this.muscleGroupService.getAll();
    }

    @Post('create-muscle-group')
    async createMuscleGroup(@Body() muscleGroup: MuscleGroup): Promise<AppResponse<MuscleGroup>> {
        const response = new AppResponse<MuscleGroup>();
        response.data = await this.muscleGroupService.createMuscleGroup(muscleGroup);
        response.success = true;
        response.message = 'Successfully';
        response.status = 200;
        return response;
    }

}
