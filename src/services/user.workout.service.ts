import { Inject, Injectable } from '@nestjs/common';
import { UserWorkout } from 'src/models/user.workout.entity';

@Injectable()
export class UserWorkoutService {
    constructor(
        @Inject('USER_WORKOUT_REPOSITORY')
        private userWorkoutRepository: typeof UserWorkout,
    ) { }

    async getAll(): Promise<UserWorkout[]> {
        return await this.userWorkoutRepository.findAll();
    }

    async delete(id: number): Promise<any> {
        return this.userWorkoutRepository.destroy({ where: { id: id } });
    }

    async createUserWorkout(userWorkout: UserWorkout): Promise<UserWorkout> {
        return await this.userWorkoutRepository.create(userWorkout);
    }

    async selectWorkout(id: number): Promise<UserWorkout> {
        return await this.userWorkoutRepository.findOne({ where: { userId: id } });
    }

    async checkWorkout(id: number): Promise<any> {
        return await this.userWorkoutRepository.findOne({ where: { userId: id } });
    }

    async updateWorkout(userId: number, workout: UserWorkout): Promise<[number, UserWorkout[]]> {
        const { monday, tuesday, wednesday, thursday, friday, saturday } = workout;
        return await this.userWorkoutRepository.update(
            {
                monday: monday,
                tuesday: tuesday,
                wednesday: wednesday,
                thursday: thursday,
                friday: friday,
                saturday: saturday,
            },
            {
                where: { userId: userId },
            },
        );
    }

    async updateMonday(userId: number, monday: string[]): Promise<[number, UserWorkout[]]> {
        return await this.userWorkoutRepository.update(
            { monday: monday },
            { where: { userId: userId } }
        );
    }

    async updateTuesday(userId: number, tuesday: string[]): Promise<[number, UserWorkout[]]> {
        return await this.userWorkoutRepository.update(
            { tuesday: tuesday },
            { where: { userId: userId } }
        );
    }

    async updateWednesday(userId: number, wednesday: string[]): Promise<[number, UserWorkout[]]> {
        return await this.userWorkoutRepository.update(
            { wednesday: wednesday },
            { where: { userId: userId } }
        );
    }

    async updateThursday(userId: number, thursday: string[]): Promise<[number, UserWorkout[]]> {
        return await this.userWorkoutRepository.update(
            { thursday: thursday },
            { where: { userId: userId } }
        );
    }

    async updateFriday(userId: number, friday: string[]): Promise<[number, UserWorkout[]]> {
        return await this.userWorkoutRepository.update(
            { friday: friday },
            { where: { userId: userId } }
        );
    }

    async updateSaturday(userId: number, saturday: string[]): Promise<[number, UserWorkout[]]> {
        return await this.userWorkoutRepository.update(
            { saturday: saturday },
            { where: { userId: userId } }
        );
    }
}
