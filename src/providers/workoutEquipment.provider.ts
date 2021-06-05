import { WorkoutEquipment } from 'src/models/workout.equipment.entity';

export const workoutEquipmentProviders = [
    {
        provide: 'WORKOUT_EQUIPMENT_REPOSITORY',
        useValue: WorkoutEquipment,
    },
];