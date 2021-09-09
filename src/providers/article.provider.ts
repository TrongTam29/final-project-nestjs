import { Article } from '../models/article.entity';

export const articleProviders = [
    {
        provide: 'ARTICLE_REPOSITORY',
        useValue: Article,
    },
];
