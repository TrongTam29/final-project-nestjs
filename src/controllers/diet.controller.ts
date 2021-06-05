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
import { Diet } from 'src/models/diet.entity';
import { DietService } from 'src/services/diet.service';
import AppResponse from 'src/utils/app.response';

@Controller('diet')
export class DietController {
    constructor(private readonly dietService: DietService) { }

    @Get('diets')
    async getAllDiets(): Promise<Diet[]> {
        return this.dietService.getAll();
    }

    @Post('create-diet')
    async createDiet(@Body() diet: Diet): Promise<AppResponse<Diet>> {
        const response = new AppResponse<Diet>();
        response.data = await this.dietService.createDiet(diet);
        response.success = true;
        response.message = 'Successfully';
        response.status = 200;
        return response;
    }

}
