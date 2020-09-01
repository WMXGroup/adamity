import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = () => ({
  root: {
    flexGrow: 1,
  },
  card: {
    marginTop: '1rem',
    marginRight: '1rem',
    marginBottom: '1rem',
    width: 400,
    border: '1px solid #1976d2',
  },
  media: {
    height: 300,
    width: 400,
  },
  media2: {
    height: 200,
    width: 300,
  },
  price: {
    marginLeft: '1rem',
  }
});

class EasyCard extends Component {

  render() {
  const { classes } = this.props;
  const { 
    cardTitle,
    cardText,
    cardImage,
    cardRoute,
    dlRoute,
    cardPrice,
    cardType,
  } = this.props

    return (
      <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= {cardImage}
        />
        <Divider />
        <CardContent style={{backgroundColor: '#1976d2', color: 'white'}}>
          <Typography gutterBottom variant="h5" component="h2">
            {cardTitle}
          </Typography>
          <Typography variant="body2" color="white" component="p">
            {cardText}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          href={dlRoute}          
          >
          {cardPrice !== '' ? 'Buy' : cardType === 'app' ? 'Link' : 'Download' }
        </Button>
        {cardRoute !== '' &&
          <Button
            size="small"
            color="primary"
            href={cardRoute}
            >
            Learn More
          </Button>
        }
        <span className={classes.price}>
          {cardPrice !== '' && 
            cardPrice
          }
        </span>
      </CardActions>
    </Card>
    );
  }
}

export default withStyles(styles)(EasyCard);