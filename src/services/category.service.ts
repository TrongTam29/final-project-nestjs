import { Inject, Injectable } from '@nestjs/common';
import { Category } from 'src/models/category.entity';

@Injectable()
export class CategoryService {
    constructor(
        @Inject('CATEGORY_REPOSITORY')
        private categoryRepository: typeof Category,
    ) { }

    async getAll(): Promise<Category[]> {
        return await this.categoryRepository.findAll();
    }

    async createCategory(category: Category): Promise<Category> {
        return await this.categoryRepository.create(category);
    }
}
