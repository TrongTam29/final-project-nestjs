import { Inject, Injectable } from '@nestjs/common';
import { Exercise } from 'src/models/exercise.entity';

@Injectable()
export class ExerciseService {
    constructor(
        @Inject('EXERCISE_REPOSITORY')
        private exerciseRepository: typeof Exercise,
    ) { }

    async getAll(): Promise<Exercise[]> {
        return await this.exerciseRepository.findAll();
    }

    async createExercise(exercise: Exercise): Promise<Exercise> {
        return await this.exerciseRepository.create(exercise);
    }
}
