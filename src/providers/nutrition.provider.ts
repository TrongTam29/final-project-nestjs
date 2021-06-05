import { Nutrition } from '../models/nutrition.entity';

export const nutritionProviders = [
    {
        provide: 'NUTRITION_REPOSITORY',
        useValue: Nutrition,
    },
];