import { Cardio } from 'src/models/cardio.entity';

export const cardioProviders = [
    {
        provide: 'CARDIO_REPOSITORY',
        useValue: Cardio,
    },
];