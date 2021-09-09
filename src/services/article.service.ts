import { Inject, Injectable } from '@nestjs/common';
import { Op } from 'sequelize';
import { User } from 'src/models/user.entity';
import { Article } from '../models/article.entity';

@Injectable()
export class ArticleService {
    constructor(
        @Inject('ARTICLE_REPOSITORY') private postRepository: typeof Article,
    ) { }

    async findAll(): Promise<Article[]> {
        return this.postRepository.findAll({
            include: [User]
        });
    }

    async deleteFile(path: string): Promise<any> {
        return this.postRepository.destroy({ where: { path: path } });
    }

    async searchArticle(name: string): Promise<any[]> {
        return await this.postRepository.findAll({
            where:
            {
                name: {
                    [Op.iLike]: `%${name}%`
                }
            },
        })
    }

}
