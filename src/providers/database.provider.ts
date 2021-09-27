import { Sequelize } from "sequelize-typescript";
import { DatabaseConfig } from "src/config/database.config";
import { Cardio } from "src/models/cardio.entity";
import { Category } from "src/models/category.entity";
import { Day } from "src/models/day.entity";
import { ExerciseComment } from "src/models/exercise.comment.entity";
import { Exercise } from "src/models/exercise.entity";
import { MuscleGroup } from "src/models/muscle.group.entity";
import { Nutrition } from "src/models/nutrition.entity";
import { User } from "src/models/user.entity";
import { UserWorkout } from "src/models/user.workout.entity";
import { WorkoutEquipment } from "src/models/workout.equipment.entity";

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: DatabaseConfig.dialect,
                host: DatabaseConfig.host.toString(),
                port: Number(DatabaseConfig.port),
                username: DatabaseConfig.username.toString(),
                password: DatabaseConfig.password.toString(),
                database: DatabaseConfig.database.toString(),
                ssl: true,
                dialectOptions: {
                    ssl: {
                        require: true,
                        rejectUnauthorized: false,
                    },
                },
                logging: (...msg) => console.log(msg),
            });
            sequelize.addModels([
                User,
                Cardio,
                Category,
                Day,
                Exercise,
                MuscleGroup,
                Nutrition,
                UserWorkout,
                WorkoutEquipment,
                ExerciseComment,
            ]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
