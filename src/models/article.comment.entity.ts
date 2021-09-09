import {
    AutoIncrement,
    BelongsTo,
    Column,
    ForeignKey,
    Model,
    PrimaryKey,
    Table,
} from 'sequelize-typescript';
import { ArticleCommentInterface } from '../interfaces/article.comment.interface';
import { Article } from './article.entity';
import { User } from './user.entity';

@Table
export class ArticleComment extends Model implements ArticleCommentInterface {
    @AutoIncrement
    @PrimaryKey
    @Column
    id: number;

    @ForeignKey(() => User)
    @Column
    userId: number;

    @Column
    comment: string;

    @ForeignKey(() => Article)
    @Column
    postId: number;

    @BelongsTo(() => Article)
    post: Article;

    @BelongsTo(() => User)
    user: User;
}
