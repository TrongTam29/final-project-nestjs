import { Module } from '@nestjs/common';
import { DayController } from 'src/controllers/day.controller';
import { dayProviders } from 'src/providers/day.provider';
import { DayService } from 'src/services/day.service';
import { DatabaseModule } from './database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [DayController],
    providers: [
        DayService,
        ...dayProviders
    ],
})
export class DayModule { }
