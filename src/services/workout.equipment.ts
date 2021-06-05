import { Inject, Injectable } from '@nestjs/common';
import { WorkoutEquipment } from 'src/models/workout.equipment.entity';

@Injectable()
export class WorkoutEquipmentService {
    constructor(
        @Inject('WORKOUT_EQUIPMENT_REPOSITORY')
        private workoutEquipmentRepository: typeof WorkoutEquipment,
    ) { }

    async getAll(): Promise<WorkoutEquipment[]> {
        return await this.workoutEquipmentRepository.findAll();
    }

    async createWorkoutEquipment(equipment: WorkoutEquipment): Promise<WorkoutEquipment> {
        return await this.workoutEquipmentRepository.create(equipment);
    }
}
