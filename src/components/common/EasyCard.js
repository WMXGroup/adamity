import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = () => ({
  root: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 400,
    minWidth: 400,
    marginTop: '1rem',
    marginRight: '1rem',
    marginBottom: '1rem',
  },
  media: {
    height: 300,
  },
});

class EasyCard extends Component {

  render() {
  const { classes } = this.props;
  // const { selectedTab } = this.state;
  const { 
    cardTitle,
    cardText,
    cardImage,
    cardRoute,
    dlRoute
  } = this.props

    return (
      <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= {cardImage}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {cardTitle}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {cardText}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
           
          >
          Download
        </Button>
        <Button
          size="small"
          color="primary"
          href={cardRoute}
          >
          Learn More
        </Button>
      </CardActions>
    </Card>
    );
  }
}

export default withStyles(styles)(EasyCard);