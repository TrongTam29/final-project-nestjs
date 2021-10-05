import { Inject, Injectable } from '@nestjs/common';
import { Cardio } from 'src/models/cardio.entity';

@Injectable()
export class CardioService {
    constructor(
        @Inject('CARDIO_REPOSITORY')
        private cardioRepository: typeof Cardio,
    ) { }

    async getAll(): Promise<Cardio[]> {
        return await this.cardioRepository.findAll();
    }

    async createCardio(cardio: Cardio): Promise<Cardio> {
        return await this.cardioRepository.create(cardio);
    }

    async findCardioByLink(link: string): Promise<Cardio> {

        return await this.cardioRepository.findOne({ where: { link: link } })
    }
}
