import { Inject, Injectable } from '@nestjs/common';
import { Op } from 'sequelize';


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

    async deleteDay(id: number): Promise<any> {
        return this.dayRepository.destroy({ where: { id: id } });
    }

    async createDay(day: Day): Promise<Day> {
        return await this.dayRepository.create(day);
    }

    async getDay(nutritionId: number, nameDay: string): Promise<Day> {
        return await this.dayRepository.findOne({
            where: {
                [Op.and]: [{ nutritionId: nutritionId }, { name: nameDay }],
            },
        })
    }
}
