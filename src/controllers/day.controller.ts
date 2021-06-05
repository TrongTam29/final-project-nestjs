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
import { Day } from 'src/models/day.entity';
import { DayService } from 'src/services/day.service';
import AppResponse from 'src/utils/app.response';

@Controller('day')
export class DayController {
    constructor(private readonly dayService: DayService) { }

    @Get('days')
    async getAllDays(): Promise<Day[]> {
        return this.dayService.getAll();
    }

    @Post('create-day')
    async createDay(@Body() day: Day): Promise<AppResponse<Day>> {
        const response = new AppResponse<Day>();
        response.data = await this.dayService.createDay(day);
        response.success = true;
        response.message = 'Successfully';
        response.status = 200;
        return response;
    }

}
