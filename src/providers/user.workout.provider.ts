import { UserWorkout } from 'src/models/user.workout.entity';

export const userWorkoutProviders = [
    {
        provide: 'USER_WORKOUT_REPOSITORY',
        useValue: UserWorkout,
    },
];