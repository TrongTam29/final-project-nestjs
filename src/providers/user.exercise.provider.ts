import { UserExercise } from 'src/models/user.exercise.entity';

export const userExerciseProviders = [
    {
        provide: 'USER_EXERCISE_REPOSITORY',
        useValue: UserExercise,
    },
];