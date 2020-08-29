import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Header from './Header';
import { Grid } from '@material-ui/core';
import BigCard from './BigCard';
import Footer from '../common/Footer';

const styles = (theme) => ({
  spacer: {
    height: '75px',
  },
  buttonStyle: {
    margin: '1rem',
  },
  titleStyle: {
    marginBottom: '1rem',
  },
});

 class Info extends Component {

  renderFeatures = () => {
    const { features } = this.props.info;

    const allFeatures = features.map((item) => (
        <li> {item} </li>
    ))

    return allFeatures;
  }

  render() {
    const { classes } = this.props;

    const {
      title,
      body,
      picture1,
      picture2,
      picture3,
      dlRoute,
      docxRoute,
      pdfRoute,
      price,
      demoRoute,
    }  = this.props.info;

    return (
      <React.Fragment>
        <Header />
        <Grid container className={classes.spacer}>
        </Grid>
        <Grid
          container
          justify="center"
          className={classes.titleStyle}
          >
          <Typography variant="h2" color="inherit" align="center">
            {title}
          </Typography>
        </Grid>
        <Grid
          container
          justify="center">
            <Typography variant="body1" color="inherit" align="center">
            {body}
            </Typography>
        </Grid>
        <Grid
          container
          justify="center"
          >
          <BigCard cardImage={picture1}/>
          <BigCard cardImage={picture2}/>
          <BigCard cardImage={picture3}/>
        </Grid>
        <Grid
          container
          justify="center"
          >
            <Typography variant="h3" color="inherit" align="center">
              Features
            </Typography>
        </Grid>
        <Grid
          container
          justify="center">
            <Typography variant="h6" color="inherit">
              <ul>
                {this.renderFeatures()}
              </ul>
            </Typography>
        </Grid>
        {price !== '' &&
          <Grid
            container
            justify="center">
              <Typography variant="h4" color="inherit">
              {price}
              </Typography>
          </Grid>
        }
        <Grid
          container
          justify="center">
          {dlRoute !== '' &&
            <Button
              color="primary"
              variant="contained"
              className={classes.buttonStyle}
              href={dlRoute}>
                {price === '' ? 'Download' : 'Buy (Paypal)'}
            </Button>
          }
          {docxRoute !== '' &&
            <Button
              color="primary"
              variant="contained"
              className={classes.buttonStyle}
              href={docxRoute}>
                View Readme (Docx)
            </Button>
          }
          {pdfRoute !== '' &&
            <Button
              color="primary"
              variant="contained"
              className={classes.buttonStyle}
              href={pdfRoute}>
                View Readme (PDF)
            </Button>
          }
          {demoRoute !== '' &&
            <Button
              color="primary"
              variant="contained"
              className={classes.buttonStyle}
              href={demoRoute}>
                View Demo
            </Button>
          }
        </Grid>
        <Footer />
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(Info);