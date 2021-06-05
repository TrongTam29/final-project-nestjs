import { Inject, Injectable } from '@nestjs/common';
import { Nutrition } from 'src/models/nutrition.entity';

@Injectable()
export class NutritionService {
    constructor(
        @Inject('NUTRITION_REPOSITORY')
        private nutritionRepository: typeof Nutrition,
    ) { }

    async getAll(): Promise<Nutrition[]> {
        return await this.nutritionRepository.findAll();
    }

    async createNutrition(nutrition: Nutrition): Promise<Nutrition> {
        return await this.nutritionRepository.create(nutrition);
    }
}
