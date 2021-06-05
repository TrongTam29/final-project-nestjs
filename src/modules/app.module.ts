import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { NutritionModule } from './nutrition.module';
import { nutritionProviders } from '../providers/nutrition.provider';
import { NutritionService } from '../services/nutrition.service';
import { CardioModule } from './cardio.module';
import { CategoryModule } from './category.module';
import { DayModule } from './day.module';
import { DietModule } from './diet.module';
import { ExerciseModule } from './exercise.module';
import { MuscleGroupModule } from './muscle.group.module';
import { UserExerciseModule } from './user.exercise.module';
import { UserModule } from './user.module';
import { UserWorkoutModule } from './user.workout.module';
import { WorkoutEquipmentModule } from './workout.equipment.module';
import { CardioService } from 'src/services/cardio.service';
import { cardioProviders } from 'src/providers/cardio.provider';
import { CategoryService } from 'src/services/category.service';
import { categoryProviders } from 'src/providers/Category.provider';
import { DayService } from 'src/services/day.service';
import { dayProviders } from 'src/providers/day.provider';
import { DietService } from 'src/services/diet.service';
import { dietProviders } from 'src/providers/diet.provider';
import { ExerciseService } from 'src/services/exercise.service';
import { exerciseProviders } from 'src/providers/exercise.provider';
import { MuscleGroupService } from 'src/services/muscle.group.service';
import { muscleGroupProviders } from 'src/providers/muscle.group.provider';
import { UserService } from 'src/services/user.service';
import { userProviders } from 'src/providers/user.provider';
import { UserExerciseService } from 'src/services/user.exercise.service';
import { userExerciseProviders } from 'src/providers/user.exercise.provider';
import { userWorkoutProviders } from 'src/providers/user.workout.provider';
import { UserWorkoutService } from 'src/services/user.workout.service';
import { WorkoutEquipmentService } from 'src/services/workout.equipment';
import { workoutEquipmentProviders } from 'src/providers/workoutEquipment.provider';

@Module({
  imports: [
    NutritionModule,
    CardioModule,
    CategoryModule,
    DayModule,
    DietModule,
    ExerciseModule,
    MuscleGroupModule,
    UserExerciseModule,
    UserModule,
    UserWorkoutModule,
    WorkoutEquipmentModule],
  controllers: [AppController],
  providers: [
    AppService,
    NutritionService,
    ...nutritionProviders,
    CardioService,
    ...cardioProviders,
    CategoryService,
    ...categoryProviders,
    DayService,
    ...dayProviders,
    DietService,
    ...dietProviders,
    ExerciseService,
    ...exerciseProviders,
    MuscleGroupService,
    ...muscleGroupProviders,
    UserService,
    ...userProviders,
    UserExerciseService,
    ...userExerciseProviders,
    UserWorkoutService,
    ...userWorkoutProviders,
    WorkoutEquipmentService,
    ...workoutEquipmentProviders
  ],
})
export class AppModule { }