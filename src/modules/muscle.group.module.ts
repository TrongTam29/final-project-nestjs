import { Module } from '@nestjs/common';
import { MuscleGroupController } from 'src/controllers/muscle.group.controller';
import { muscleGroupProviders } from 'src/providers/muscle.group.provider';
import { MuscleGroupService } from 'src/services/muscle.group.service';
import { DatabaseModule } from './database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [MuscleGroupController],
    providers: [
        MuscleGroupService,
        ...muscleGroupProviders
    ],
})
export class MuscleGroupModule { }
