import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const styles = () => ({
  root: {
    flexGrow: 1,
  },
  card: {
    marginTop: '1rem',
    marginRight: '1rem',
    marginBottom: '1rem',
  },
  media: {
    height: 400,
    width: 600,
    backgroundColor: 'blue',
  },
});

class BigCard extends Component {

  render() {
  const { classes } = this.props;

  const { 
    cardImage,
  } = this.props

    return (
      <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= {cardImage}
        />
      </CardActionArea>
    </Card>
    );
  }
}

export default withStyles(styles)(BigCard);