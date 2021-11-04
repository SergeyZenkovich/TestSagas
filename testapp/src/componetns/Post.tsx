import React, { useState } from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Comments } from './Comments';

type Props = {
    title: string;
    body: string;
    postId: number;
}

export const Post: React.FC<Props> = ({ title, body, postId }) => {
    const [isCommentShown, setIsCommentShown] = useState<boolean>(false);

    return (
        <Card>
            <Typography variant="h5" component="div">
                {title}
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {body}
            </Typography>
            <Button variant="contained" onClick={() => { setIsCommentShown(!isCommentShown) }}>Comments</Button>
            {isCommentShown?
                    <div>
                        <Comments postId={postId}/>
                    </div> : 
                    null
            }

        </Card>
    );
}