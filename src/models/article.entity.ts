import {
    AutoIncrement,
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    HasMany,
    Model,
    PrimaryKey,
    Table,
} from 'sequelize-typescript';
import { User } from './user.entity';
import { ArticleComment } from './article.comment.entity';
import { ArticleInterface } from 'src/interfaces/article.interface';

@Table
export class Article extends Model implements ArticleInterface {
    @AutoIncrement
    @PrimaryKey
    @Column
    id: number;

    @ForeignKey(() => User)
    @Column
    userId: number;

    @Column
    description: string;

    @Column({ type: DataType.ARRAY(DataType.STRING) })
    images: Array<string>;

    @BelongsTo(() => User)
    user: User;

    @HasMany(() => ArticleComment)
    comments: ArticleComment[];
}
