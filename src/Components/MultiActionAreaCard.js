import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard() {
  return (
    <div className='cards'>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          width="5280"
          image="https://picsum.photos/300/200/"
          alt="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <h6>Generate audience</h6>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Get the customized data about companies, people, and geography you need to get started
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="big" color="primary">
          Generate
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}
