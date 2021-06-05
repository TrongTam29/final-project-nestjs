import {
    Body,
    Controller,
    Get,
    Param,
    Patch,
    Post,
    Query,
    Req,
    UseGuards,
} from '@nestjs/common';
import { Category } from 'src/models/category.entity';
import { CategoryService } from 'src/services/category.service';
import AppResponse from 'src/utils/app.response';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) { }

    @Get('categories')
    async getAllCategories(): Promise<Category[]> {
        return this.categoryService.getAll();
    }

    @Post('create-category')
    async createCategorie(@Body() category: Category): Promise<AppResponse<Category>> {
        const response = new AppResponse<Category>();
        response.data = await this.categoryService.createCategory(category);
        response.success = true;
        response.message = 'Successfully';
        response.status = 200;
        return response;
    }

}
