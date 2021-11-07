import React, { useEffect } from 'react';
import { Post } from './Post';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { loadPostsAction, startFetchPostsDataAction } from '../redux/reducers/posts/postActions';
import { createQueryFromArray } from '../utils/createQuery';

type Props = {
    personIds: number[];
}

export const Posts: React.FC<Props> = ({ personIds }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {posts, isPostsLoading} = useSelector((state:RootState) => state.posts);

    useEffect(() => {
        const getPosts = async () => {
            const filterString = `?userId=${createQueryFromArray(personIds)}`
            navigate(filterString);
            dispatch(startFetchPostsDataAction(filterString));
        }
        if (personIds.length > 0) {
            getPosts();
        } else {
            dispatch(loadPostsAction([]));
        }
    }, [personIds]);

    return (
        <div style={{display: 'flex', justifyContent: 'center' }}>
            {isPostsLoading ?
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box> :
                <div>
                    {posts.map((el: PostType) => <Post key={el.id} title={el.title} body={el.body} postId={el.id}/>)}
                </div>
            }

        </div>
    );
}