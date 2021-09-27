export interface ExerciseCommentInterface {
    id: number;
    exerciseId: number;
    userId: number;
    comment: string;
}

export interface createExerciseComment {
    userId: number,
    exerciseId: number,
    comment: string
}
