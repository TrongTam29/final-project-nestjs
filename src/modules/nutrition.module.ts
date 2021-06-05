import { Module } from '@nestjs/common';
import { NutritionController } from 'src/controllers/nutrition.controller';
import { nutritionProviders } from 'src/providers/nutrition.provider';
import { NutritionService } from 'src/services/nutrition.service';
import { DatabaseModule } from './database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [NutritionController],
    providers: [
        NutritionService,
        ...nutritionProviders
    ],
})
export class NutritionModule { }
