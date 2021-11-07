import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startFetchCommentsDataAction } from '../redux/reducers/posts/postActions';
import { RootState } from '../redux/store';
import { Comment } from './Comment';

type Props = {
    postId: number;
}

export const Comments: React.FC<Props> = ({ postId }) => {
    const dispatch = useDispatch();
    const { commetns, isCommentsLoading } = useSelector((state: RootState) => state.posts);

    useEffect(() => {
        const getPosts = async () => {
            dispatch(startFetchCommentsDataAction(postId))
        }
        getPosts();
    }, []);


    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            {isCommentsLoading ?
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box> :
                <div>
                    {commetns.map((el: CommentType) => <Comment name={el.name} email={el.email} />)}
                </div>
            }

        </div>
    );
}