import { Inject, Injectable } from '@nestjs/common';
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
}
