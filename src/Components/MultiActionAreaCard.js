import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Container, Row, Col } from 'react-grid-system';
import audience from '../assets/audience.webp';
import enrich from '../assets/enrichdata.png';
import predict from '../assets/predict.jpg';

export default function MultiActionAreaCard() {
  return (
    <div className='cards'>
      <Container>
            <p className='welcome-header'>
                <b>
                <u><a>Welcome to our
                external data platform.
                </a>
                </u>
                </b>
                <p>Unlock the power of external data by choosing one of the options below</p>
            </p>
        <Row>
          <Col sm={4}>
           
            <Card className='innerCard'>
              <CardActionArea>
                  <CardMedia
                    component="img"
                    height="210"
                    image={audience}
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
          </Col>
          <Col sm={4}>

            <Card className='innerCard'> 
    <CardActionArea>
        <CardMedia
          component="img"
          height="210"
          image={enrich}
          alt="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <h6>Enrich your data</h6>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Take your internal data further by enriching and expanding it with external data signals
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="big" color="primary">
          Enrich
        </Button>
      </CardActions>
      </Card>
          </Col>
          <Col sm={4}>
            
            <Card className='innerCard'> 
          <CardActionArea>
              <CardMedia
                component="img"
                height="210"
                image={predict}
                alt="img"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <h6>Discover predictive features</h6>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Build and optimize your predictions with impactful external data features, and deploy models or export features
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="big" color="primary">
                Predict
              </Button>
            </CardActions>
            </Card>
                </Col>
              </Row>
      </Container>
    


    </div>
  );
}
