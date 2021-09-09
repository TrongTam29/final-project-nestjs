import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { ArticleController } from '../controllers/article.controller';
import { ArticleService } from '../services/article.service';
import { articleProviders } from '../providers/article.provider';

@Module({
    imports: [DatabaseModule],
    controllers: [ArticleController],
    providers: [ArticleService, ...articleProviders],
})
export class ArticleModule { }
