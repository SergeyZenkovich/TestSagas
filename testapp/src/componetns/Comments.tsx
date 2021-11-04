import React, { useEffect, useState } from 'react';
import { Comment } from './Comment';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

type Props = {
    postId: number;
}

type CommentType = {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

export const Comments: React.FC<Props> = ({ postId }) => {
    const [postComments, setPostComments] = useState<CommentType[]>([]);


    useEffect(() => {
        const getPosts = async () => {
            const posts = await (await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)).json();
            setPostComments(posts);
        }
        getPosts();
    }, []);


    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div>
                {postComments.map((el: CommentType) => <Comment name={el.name} email={el.email}/>)}
            </div>
        </div>
    );
}