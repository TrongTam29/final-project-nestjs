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

    async delete(id: number): Promise<any> {
        return this.exerciseRepository.destroy({ where: { id: id } });
    }

    async createExercise(exercise: Exercise): Promise<Exercise> {
        return await this.exerciseRepository.create(exercise);
    }

    async findAllExerciseById(id: number): Promise<Exercise[]> {
        return await this.exerciseRepository.findAll({
            where: { muscleGroupId: id }
        })
    }

    async findExerciseByLink(link: string): Promise<Exercise> {
        return await this.exerciseRepository.findOne({ where: { link: link } })
    }

}
