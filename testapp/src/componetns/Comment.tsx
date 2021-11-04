import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

type Props = {
    name: string;
    email: string;
}

export const Comment: React.FC<Props>  = ({name, email}) => {
    return (
      <Card>
          <Typography variant="h5" component="div">
          {name}
        </Typography>
          <Typography sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
          {email}
        </Typography>
      </Card>
    );
  }