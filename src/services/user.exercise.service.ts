import { Inject, Injectable } from '@nestjs/common';
import { Day } from 'src/models/day.entity';
import { UserExercise } from 'src/models/user.exercise.entity';

@Injectable()
export class UserExerciseService {
    constructor(
        @Inject('USER_EXERCISE_REPOSITORY')
        private userExerciseRepository: typeof UserExercise,
    ) { }

    async getAll(): Promise<UserExercise[]> {
        return await this.userExerciseRepository.findAll();
    }

    async createUserExercise(userExercise: UserExercise): Promise<UserExercise> {
        return await this.userExerciseRepository.create(userExercise);
    }
}
