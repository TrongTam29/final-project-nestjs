import { ExerciseComment } from '../models/exercise.comment.entity';

export const exerciseCommentProviders = [
    {
        provide: 'EXERCISE_COMMENT_REPOSITORY',
        useValue: ExerciseComment,
    },
];
