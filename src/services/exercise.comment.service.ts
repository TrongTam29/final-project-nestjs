import { Injectable, Inject } from '@nestjs/common';
import { ExerciseComment } from '../models/exercise.comment.entity';

@Injectable()
export class ExerciseCommentService {
    constructor(
        @Inject('EXERCISE_COMMENT_REPOSITORY')
        private exerciseCommentRepository: typeof ExerciseComment,
    ) { }

    async findAll(): Promise<ExerciseComment[]> {
        return this.exerciseCommentRepository.findAll();
    }

    async createExerciseComment(userId: number, exerciseId: number, comment: string): Promise<ExerciseComment> {
        return await this.exerciseCommentRepository.create({
            exerciseId: exerciseId,
            userId: userId,
            comment: comment
        });
    }

    async delete(id: number): Promise<any> {
        return this.exerciseCommentRepository.destroy({ where: { id: id } });
    }

    async findCommentbyExerciseId(exerciseId: number): Promise<ExerciseComment[]> {
        return this.exerciseCommentRepository.findAll({ where: { exerciseId: exerciseId } })
    }
}
