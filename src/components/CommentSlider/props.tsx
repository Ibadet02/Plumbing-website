export interface CommentProps {
    id: number;
    userName: string;
    status: string;
    userImg: {
        src: string;
        alt: string;
    }
    comment: string;
    date: string;
    rating: number;

}

export interface CommentSliderProps {
    comments: CommentProps[];
}