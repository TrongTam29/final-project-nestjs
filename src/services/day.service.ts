import { Inject, Injectable } from '@nestjs/common';
import { Day } from 'src/models/day.entity';

@Injectable()
export class DayService {
    constructor(
        @Inject('DAY_REPOSITORY')
        private dayRepository: typeof Day,
    ) { }

    async getAll(): Promise<Day[]> {
        return await this.dayRepository.findAll();
    }

    async createDay(day: Day): Promise<Day> {
        return await this.dayRepository.create(day);
    }
}
