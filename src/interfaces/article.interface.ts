export interface ArticleInterface {
    id: number;
    userId: number;
    images: Array<string>;
    description: string;
}
export interface PostUpload {
    userId: number;
    title: string;
    description: string;
}
