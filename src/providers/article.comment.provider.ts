import { ArticleComment } from '../models/article.comment.entity';

export const articleCommentProviders = [
    {
        provide: 'ARTICLE_COMMENT_REPOSITORY',
        useValue: ArticleComment,
    },
];
