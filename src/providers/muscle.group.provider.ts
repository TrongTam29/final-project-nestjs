import { MuscleGroup } from 'src/models/muscle.group.entity';

export const muscleGroupProviders = [
    {
        provide: 'MUSCLE_GROUP_REPOSITORY',
        useValue: MuscleGroup,
    },
];