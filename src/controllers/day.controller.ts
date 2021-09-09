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
import { Day } from 'src/models/day.entity';
import { DayService } from 'src/services/day.service';
import AppResponse from 'src/utils/app.response';

@Controller('day')
export class DayController {
    constructor(private readonly dayService: DayService) { }

    @Get('days')
    async getAllDays(): Promise<Day[]> {
        return await this.dayService.getAll();
    }

    @Delete('deleteDay')
    async deleteDay(@Query('id') id: number): Promise<any> {
        return await this.dayService.deleteDay(id)
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

    //Get Day and Diet to display 
    @Get('get-day-diet/:nutritionId/:nameDay')
    async getDayDiet(@Param('nutritionId') nutritionId: number, @Param('nameDay') nameDay: string): Promise<Day> {
        return await this.dayService.getDay(nutritionId, nameDay)
    }

}
