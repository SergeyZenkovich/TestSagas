type UserType = {
    id: number;
    name: string;
}
type PostType = {
    id: number;
    userId: number;
    title: string;
    body: string;
}

type CommentType = {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}