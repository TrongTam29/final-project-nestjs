import { Inject, Injectable } from '@nestjs/common';
import { UserWorkout } from 'src/models/user.workout.entity';

@Injectable()
export class UserWorkoutService {
    constructor(
        @Inject('USER_WORKOUT_REPOSITORY')
        private userWorkoutRepository: typeof UserWorkout,
    ) { }

    async getAll(): Promise<UserWorkout[]> {
        return await this.userWorkoutRepository.findAll();
    }

    async createUserWorkout(userWorkout: UserWorkout): Promise<UserWorkout> {
        return await this.userWorkoutRepository.create(userWorkout);
    }
}
