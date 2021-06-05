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
import { Cardio } from 'src/models/cardio.entity';
import { CardioService } from 'src/services/cardio.service';
import AppResponse from 'src/utils/app.response';

@Controller('cardio')
export class CardioController {
    constructor(private readonly cardioService: CardioService) { }

    @Get('cardios')
    async getAllCardios(): Promise<Cardio[]> {
        return this.cardioService.getAll();
    }

    @Post('create-cardio')
    async createCardio(@Body() cardio: Cardio): Promise<AppResponse<Cardio>> {
        const response = new AppResponse<Cardio>();
        response.data = await this.cardioService.createCardio(cardio);
        response.success = true;
        response.message = 'Successfully';
        response.status = 200;
        return response;
    }

}
