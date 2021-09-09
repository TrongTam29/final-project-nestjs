import { Injectable, Inject } from '@nestjs/common';
import { Article } from 'src/models/article.entity';
import { ArticleComment } from '../models/article.comment.entity';

@Injectable()
export class ArticleCommentsService {
    constructor(
        @Inject('ARTICLE_COMMENT_REPOSITORY')
        private postCommentRepository: typeof ArticleComment,
    ) { }

    async findAll(): Promise<ArticleComment[]> {
        return this.postCommentRepository.findAll();
    }

    async createPostComment(comment: ArticleComment): Promise<ArticleComment> {
        return await this.postCommentRepository.create(comment);
    }

    async createArticleComment(articletId: number, userId: number, comment: string): Promise<ArticleComment> {
        return await this.postCommentRepository.create({
            postId: articletId,
            userId: userId,
            comment: comment
        });
    }
}
