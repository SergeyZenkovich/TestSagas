import React, { useEffect, useState } from 'react';
import { Post } from './Post';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router';

type Props = {
    personIds: number[];
}

const createEndofRequest = (array: number[]): string => {
    return array.join('&userId=');
}

export const Posts: React.FC<Props> = ({ personIds }) => {

    const [showedPosts, setShowedPosts] = useState<PostType[]>([]);
    const [startFetching, setStartFetching] = useState<boolean>(false);

    const navigate = useNavigate();

    useEffect(() => {
        const getPosts = async () => {
            setStartFetching(true);
            const filterString = `?userId=${createEndofRequest(personIds)}`
            navigate(filterString);
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
                    {showedPosts.map((el: PostType) => <Post key={el.id} title={el.title} body={el.body} postId={el.id}/>)}
                </div>
            }

        </div>
    );
}