import { Exercise } from 'src/models/exercise.entity';

export const exerciseProviders = [
    {
        provide: 'EXERCISE_REPOSITORY',
        useValue: Exercise,
    },
];