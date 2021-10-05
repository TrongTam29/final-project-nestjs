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
import { link } from 'fs';
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
    async createCardio(@Body() cardio: Cardio): Promise<Cardio> {
        return await this.cardioService.createCardio(cardio);
    }

    @Get('find-cardio-by-link')
    async findCardioByLink(@Query('link') link: string): Promise<Cardio> {
        return await this.cardioService.findCardioByLink(link);
    }
}
