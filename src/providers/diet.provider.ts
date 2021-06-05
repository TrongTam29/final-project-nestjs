import { Diet } from 'src/models/diet.entity';

export const dietProviders = [
    {
        provide: 'DIET_REPOSITORY',
        useValue: Diet,
    },
];