import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { NutritionModule } from './nutrition.module';
import { nutritionProviders } from '../providers/nutrition.provider';
import { NutritionService } from '../services/nutrition.service';
import { CardioModule } from './cardio.module';
import { CategoryModule } from './category.module';
import { DayModule } from './day.module';
import { ExerciseModule } from './exercise.module';
import { MuscleGroupModule } from './muscle.group.module';
import { UserModule } from './user.module';
import { UserWorkoutModule } from './user.workout.module';
import { WorkoutEquipmentModule } from './workout.equipment.module';
import { CardioService } from 'src/services/cardio.service';
import { cardioProviders } from 'src/providers/cardio.provider';
import { CategoryService } from 'src/services/category.service';
import { categoryProviders } from 'src/providers/Category.provider';
import { DayService } from 'src/services/day.service';
import { dayProviders } from 'src/providers/day.provider';
import { ExerciseService } from 'src/services/exercise.service';
import { exerciseProviders } from 'src/providers/exercise.provider';
import { MuscleGroupService } from 'src/services/muscle.group.service';
import { muscleGroupProviders } from 'src/providers/muscle.group.provider';
import { UserService } from 'src/services/user.service';
import { userProviders } from 'src/providers/user.provider';
import { userWorkoutProviders } from 'src/providers/user.workout.provider';
import { UserWorkoutService } from 'src/services/user.workout.service';
import { WorkoutEquipmentService } from 'src/services/workout.equipment';
import { workoutEquipmentProviders } from 'src/providers/workoutEquipment.provider';
import { AppGateway } from 'src/app.gateway';
import { ExerciseCommentService } from 'src/services/exercise.comment.service';
import { exerciseCommentProviders } from 'src/providers/exercise.comment.provider';
import { ExerciseCommentModule } from './exercise.comment.module';

@Module({
  imports: [
    NutritionModule,
    CardioModule,
    CategoryModule,
    DayModule,
    ExerciseModule,
    ExerciseCommentModule,
    MuscleGroupModule,
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
    ExerciseService,
    ...exerciseProviders,
    ExerciseCommentService,
    ...exerciseCommentProviders,
    MuscleGroupService,
    ...muscleGroupProviders,
    UserService,
    ...userProviders,
    UserWorkoutService,
    ...userWorkoutProviders,
    WorkoutEquipmentService,
    ...workoutEquipmentProviders,
    ExerciseCommentService,
    ...exerciseCommentProviders,
    AppGateway,
  ],
})
export class AppModule { }
