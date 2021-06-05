import { Module } from '@nestjs/common';
import { DietController } from 'src/controllers/diet.controller';
import { dietProviders } from 'src/providers/diet.provider';
import { DietService } from 'src/services/diet.service';
import { DatabaseModule } from './database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [DietController],
    providers: [
        DietService,
        ...dietProviders
    ],
})
export class DietModule { }
