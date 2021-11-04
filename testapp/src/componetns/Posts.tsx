import React, { useEffect, useState } from 'react';
import { Post } from './Post';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

type Props = {
    personIds: number[];
}

type PostType = {
    id: number;
    userId: number;
    title: string;
    body: string;
}

const createEndofRequest = (array: number[]): string => {
    return array.join('&userId=');
}

export const Posts: React.FC<Props> = ({ personIds }) => {

    const [showedPosts, setShowedPosts] = useState<PostType[]>([]);
    const [startFetching, setStartFetching] = useState<boolean>(false);


    useEffect(() => {
        const getPosts = async () => {
            setStartFetching(true);
            const posts = await (await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${createEndofRequest(personIds)}`)).json();
            setShowedPosts(posts);
            setStartFetching(false);
        }
        if (personIds.length > 0) {
            getPosts();
        } else {
            setShowedPosts([]);
        }
    }, [personIds]);


    return (
        <div style={{display: 'flex', justifyContent: 'center' }}>
            {startFetching ?
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box> :
                <div>
                    {showedPosts.map((el: PostType) => <Post title={el.title} body={el.body} postId={el.id}/>)}
                </div>
            }

        </div>
    );
}