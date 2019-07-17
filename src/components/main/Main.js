import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Grid } from '@material-ui/core';
import EasyCard from '../common/EasyCard';
import PropTypes from 'prop-types';
import Header from '../common/Header';
import Background from '../../assets/back.jpg';
import imgReact from '../../assets/react.png';
import imgMaterial from '../../assets/material.png';
import P5Wrapper from 'react-p5-wrapper';
import sketch2 from './MySketch2';

const styles = (theme) => ({
  header: {
    backgroundColor: '#1976d2',
  },
  tabs: {
    backgroundColor: '#f5f5f5',
  },
  indicator:{
    backgroundColor: 'green',
  },
  banner: {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    height: '25rem',
    color: 'white',
  },
  main: {
    backgroundColor: '#aaa',
  },
  soon: {
    height: '27.45rem',
  },
  description: {
    marginLeft: '1rem',
    marginRight: '1rem',
  },
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

class Main extends Component {
  state = {
    selectedTab: 0,
  }

  handleChange = (e, value) => {
    this.setState({
      selectedTab: value,
    })
  }

  render() {
  const { classes } = this.props;
  const { selectedTab } = this.state;
    return (
      <React.Fragment>
        <Header />
        <Grid
          container
          justify="center"
          alignContent="center"
          className={classes.banner}
          >
          <Grid
            container
            justify="center"
            alignContent="center">
            <Typography variant="h3" color="inherit">
              Welcome to Adamity! 
            </Typography>
          </Grid>
          <Grid container>
            {<br/>}
          </Grid>
          <Grid
            container
            justify="center"
            alignContent="center"
            className={classes.description}>
            <Typography variant="body1" color="inherit">
              Adamity is a collection of tools, demos, and tutorials for a wide variety of technologies. 
            </Typography>
          </Grid>
          <Grid container>
            {<br/>}
          </Grid>
          <Grid
            container
            justify="center"
            alignContent="center"
            className={classes.description}>
            <Typography variant="body1" color="inherit">
              Our goal is to simplify, automate, and educate to provide unique solutions for both personal and business use.
            </Typography>
          </Grid>
        </Grid>
        <Tabs
          className={classes.tabs}
          value={this.state.selectedTab}
          onChange={this.handleChange}
          textColor="primary"
          indicatorColor="primary"
          centered
          >
        <Tab label="Excel Free" />
        <Tab label="Excel Premium" />
        <Tab label="Python" />
        <Tab label="P5.js" />
        <Tab label="Tutorials" />
      </Tabs>
      {selectedTab === 0 &&
        <Grid
          container
          justify="center"
          >
          <EasyCard
            cardTitle='Chore Tracker'
            cardText='Keep your family organized and on task with this nifty chore tracker'
            cardImage={require ('../../assets/choreTracker.png')}
            dlRoute=""
            cardRoute='test'
          />
          <EasyCard
            cardTitle='Recipe Book'
            cardText='Quick and easy way to organize all of your favorite recipes'
            cardImage={require ('../../assets/recipeBook.png')}
            dlRoute=""
            cardRoute='test'
          />
          <EasyCard
            cardTitle='Meal Budgeter'
            cardText='Meal Budgeter is a tool to help you plan your meals around your budget.'
            cardImage={require ('../../assets/mealBudgeter.png')}
            dlRoute=""
            cardRoute='test'
          />
          <EasyCard
            cardTitle='Monthly Calendar'
            cardText='Monthly Calendar is a simple tool that creates monthly calendars.'
            cardImage={require ('../../assets/monthlyCalendar.png')}
            cardRoute='/monthlyCalendar'
            dlRoute='http://drive.google.com/uc?export=download&id=14SLiCCAx7LRZriv_yzo8np3HrLHXksMP'
          />
        </Grid>
      }
      {selectedTab === 1 &&
        <Grid
          container
          justify="center"
          >
          <EasyCard
            cardTitle='Task Advantage'
            cardText='Task Advantage is a complete tool project management tool kit and task tracker'
            cardImage={require ('../../assets/taskAdvantage.png')}
            dlRoute=""
            cardRoute='test'
          />
          <EasyCard
            cardTitle='Financial Objective'
            cardText='Financial Objective is a tool that helps users easily keep track of their savings and spending'
            cardImage={require ('../../assets/financialOutlook.png')}
            dlRoute=""
            cardRoute='test'
          />
          </Grid>
        }
        {selectedTab === 2 &&
          <Grid
            container
            justify="center"
            alignContent="center"
            className={classes.soon}>
            <Typography variant="h2" color="inherit">
              Coming Soon...
            </Typography>
          </Grid>
        }
         {selectedTab === 3 &&
          <Grid
          container
          justify="center"
          alignContent="center"
          className={classes.soon}>
            <P5Wrapper sketch={sketch2} />
          </Grid>
        }
        {selectedTab === 4 &&
          <Grid
          container
          justify="center"
          alignContent="center"
          className={classes.soon}>
            <Typography variant="h2" color="inherit">
              Coming Soon...
            </Typography>
          </Grid>
        }
        <Grid
          container
          justify="center"
          alignContent="center"
          alignItems="center"
          className={classes.footer}
          >
          <Typography variant="body1" color="inherit">
            Copyright &copy; Adamity 2019 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Typography>
          <Typography variant="body1" color="inherit">
              Built with &nbsp;
          </Typography>
          <img src={imgReact} className={classes.image}/> &nbsp;&nbsp;
          <img src={imgMaterial} className={classes.image}/> 
        </Grid>
      </React.Fragment>
    );
  }
}

Main.propTypes = {
  
};

export default withStyles(styles)(Main);