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
import { Nutrition } from 'src/models/nutrition.entity';
import { NutritionService } from 'src/services/nutrition.service';
import AppResponse from 'src/utils/app.response';

@Controller('nutrition')
export class NutritionController {
    constructor(private readonly nutritionService: NutritionService) { }

    @Get('nutritions')
    async getAllUsers(): Promise<Nutrition[]> {
        return this.nutritionService.getAll();
    }

    @Post('create-nutrition')
    async createFaculty(@Body() nutrition: Nutrition): Promise<AppResponse<Nutrition>> {
        const response = new AppResponse<Nutrition>();
        response.data = await this.nutritionService.createNutrition(nutrition);
        response.success = true;
        response.message = 'Successfully';
        response.status = 200;
        return response;
    }

}
