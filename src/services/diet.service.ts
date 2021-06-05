import { Inject, Injectable } from '@nestjs/common';
import { Diet } from 'src/models/diet.entity';

@Injectable()
export class DietService {
    constructor(
        @Inject('DIET_REPOSITORY')
        private dietRepository: typeof Diet,
    ) { }

    async getAll(): Promise<Diet[]> {
        return await this.dietRepository.findAll();
    }

    async createDiet(diet: Diet): Promise<Diet> {
        return await this.dietRepository.create(diet);
    }
}
