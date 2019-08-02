import React, { Component } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';

const styles = (theme) => ({
  spacer: {
    height: '75px',
  },
  headingSpacer: {
    margin: '25px',
  },
  bodySpacer: {
    margin: '25px',
    marginBottom: '25px',
  },
})

class About extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Header />
        <Grid container className={classes.spacer}>
        </Grid>
        <Grid
          container
          justify="center"
          className={classes.headingSpacer}
          >
          <Typography variant="h2" color="inherit">
            About / Contact
          </Typography>
        </Grid>
        <Grid
          container
          justify="center"
          alignContent="center">
          <Typography variant="body1" color="inherit">
            Adamity is a collection of tools, demos, and tutorials covering a wide variety of technologies. 
          </Typography>
        </Grid>
        <Grid container>
          {<br/>}
        </Grid>
        <Grid
          container
          justify="center"
          alignContent="center">
          <Typography variant="body1" color="inherit">
            Our goal is to simplify, automate, and educate to provide unique solutions for both personal and business use.
          </Typography>
        </Grid>
        <Grid container>
          {<br/>}
        </Grid>
        <Grid
          container
          justify="center"
          alignContent="center">
          <Typography variant="body1" color="inherit">
            For any comments, questions, or concerns, please contact us at adamity1@gmail.com.
          </Typography>
        </Grid>
        <Grid container className={classes.spacer}>
        </Grid>
        <Footer />
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(About);