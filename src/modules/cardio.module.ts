import { Module } from '@nestjs/common';
import { CardioController } from 'src/controllers/cardio.controller';
import { cardioProviders } from 'src/providers/cardio.provider';
import { CardioService } from 'src/services/cardio.service';
import { DatabaseModule } from './database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [CardioController],
    providers: [
        CardioService,
        ...cardioProviders
    ],
})
export class CardioModule { }
