import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Grid } from '@material-ui/core';
import EasyCard from '../common/EasyCard';
import PropTypes from 'prop-types';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Background from '../../assets/back.jpg';
import P5Wrapper from 'react-p5-wrapper';
import sketch1 from '../sketches/Sketch1';

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
              Adamity is a collection of tools, demos, and tutorials covering a wide variety of technologies. 
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
        <Grid
          container
          justify="center">
          <Tabs
            className={classes.tabs}
            value={this.state.selectedTab}
            onChange={this.handleChange}
            textColor="primary"
            indicatorColor="primary"
            variant="scrollable"
            scrollButtons="on"
            >
            <Tab label="Excel Free" />
            <Tab label="Excel Premium" />
            <Tab label="Python" />
            <Tab label="P5.js" />
            <Tab label="Tutorials" />
            <Tab label="Cheatsheets" />
          </Tabs>
        </Grid>
        {selectedTab === 0 &&
          <Grid
            container
            justify="center"
            >
            <EasyCard
              cardTitle='Simple Tracker'
              cardText='Keep things organized with this simple multi-functional tracker.'
              cardImage={require ('../../assets/choreTracker.png')}
              dlRoute='http://drive.google.com/uc?export=download&id=1T3B3JB4tk5j8MFc4dtwLClk9FVbAZ5Mw'
              cardRoute='/simpleTracker'
            />
            <EasyCard
              cardTitle='Recipe Book'
              cardText='Provides a quick and easy way to organize all of your favorite recipes.'
              cardImage={require ('../../assets/recipeBook.png')}
              dlRoute='http://drive.google.com/uc?export=download&id=1xLnf02Erv45PwWUa4LEqXCg1qWywtKT_'
              cardRoute='/recipeBook'
            />
            <EasyCard
              cardTitle='Meal Budgeter'
              cardText='Meal Budgeter is a tool to help you plan your meals around your budget.'
              cardImage={require ('../../assets/mealBudgeter.png')}
              dlRoute='http://drive.google.com/uc?export=download&id=1sdN1G-Mfl2S_hqF_oM9JtZAAkt1MqPKW'
              cardRoute='/mealBudgeter'
            />
            <EasyCard
              cardTitle='Monthly Calendar'
              cardText='Monthly Calendar is a simple tool that creates printable monthly calendars.'
              cardImage={require ('../../assets/monthlyCalendar.png')}
              cardRoute='/monthlyCalendar'
              dlRoute='http://drive.google.com/uc?export=download&id=1B0VMyAmLbXzrDMiEHnriyni_M6YuWjqz'
            />
          </Grid>
        }
        {selectedTab === 1 &&
          <Grid
          container
          justify="center"
          alignContent="center"
          className={classes.soon}>
            <Typography variant="h2" color="inherit">
              Coming Soon...
            </Typography>
          </Grid>
          // <Grid
          //   container
          //   justify="center"
          //   >
          //   <EasyCard
          //     cardTitle='Task Advantage'
          //     cardText='Task Advantage is a complete project management tool kit and task tracker.'
          //     cardImage={require ('../../assets/taskAdvantage.png')}
          //     dlRoute=''
          //     cardRoute='/taskAdvantage'
          //   />
          //   <EasyCard
          //     cardTitle='Financial Objective'
          //     cardText='Financial Objective is a tool that helps users easily keep track of their savings and spending.'
          //     cardImage={require ('../../assets/financialOutlook.png')}
          //     dlRoute=''
          //     cardRoute='/financialObjective'
          //   />
          // </Grid>
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
            <P5Wrapper sketch={sketch1} />
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
        {selectedTab === 5 &&
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
        <Footer />
      </React.Fragment>
    );
  }
}

Main.propTypes = {
  
};

export default withStyles(styles)(Main);