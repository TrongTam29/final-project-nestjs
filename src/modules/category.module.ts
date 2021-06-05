import { Module } from '@nestjs/common';
import { CategoryController } from 'src/controllers/category.controller';
import { categoryProviders } from 'src/providers/Category.provider';
import { CategoryService } from 'src/services/category.service';
import { DatabaseModule } from './database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [CategoryController],
    providers: [
        CategoryService,
        ...categoryProviders
    ],
})
export class CategoryModule { }
