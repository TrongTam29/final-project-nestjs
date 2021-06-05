import { Day } from 'src/models/day.entity';

export const dayProviders = [
    {
        provide: 'DAY_REPOSITORY',
        useValue: Day,
    },
];