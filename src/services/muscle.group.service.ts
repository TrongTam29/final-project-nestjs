import { Inject, Injectable } from '@nestjs/common';
import { Category } from 'src/models/category.entity';
import { Exercise } from 'src/models/exercise.entity';
import { MuscleGroup } from 'src/models/muscle.group.entity';

@Injectable()
export class MuscleGroupService {
    constructor(
        @Inject('MUSCLE_GROUP_REPOSITORY')
        private muscleGroupRepository: typeof MuscleGroup,
    ) { }

    async getAll(): Promise<MuscleGroup[]> {
        return await this.muscleGroupRepository.findAll();
    }

    async createMuscleGroup(muscle: MuscleGroup): Promise<MuscleGroup> {
        return await this.muscleGroupRepository.create(muscle);
    }

    async findExerciseById(id: number): Promise<MuscleGroup> {
        return await this.muscleGroupRepository.findOne({
            where: { id: id }, include: [
                Category,
            ]
        })
    }
}
