import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import imgReact from '../../assets/react.png';
import imgMaterial from '../../assets/material.png';
import Button from '@material-ui/core/Button';

const styles = (theme) => ({
  footer:{
    backgroundColor: theme.palette.primary.main,
    height: '4rem',
    color: 'white'
  },
  image: {
    width: 48,
    height:42,
  }
});

class Footer extends Component {
  render(){
    const { classes } = this.props;
    return (
      <Grid
        container
        justify="center"
        alignContent="center"
        alignItems="center"
        className={classes.footer}
      >
        <Grid item>
          <Typography variant="body1" color="inherit">
            Adamity 2019 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" color="inherit">
              Built with &nbsp;&nbsp;&nbsp;
          </Typography>
        </Grid>
        <Grid item>
          <img src={imgReact} className={classes.image}/> &nbsp;&nbsp;
        </Grid>
        <Grid item>
          <img src={imgMaterial} className={classes.image}/>
        </Grid> 
      </Grid>
    )
  }   
}

export default withStyles(styles)(Footer);