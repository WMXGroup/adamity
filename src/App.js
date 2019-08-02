import React from 'react';
import Main from './components/main/Main';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from "@material-ui/core";
import { blue } from '@material-ui/core/colors';
import { pink } from '@material-ui/core/colors';
import { BrowserRouter as Router, Route} from "react-router-dom";
import About from './components/main/About';
import Terms from './components/main/Terms';
import Blog from './components/main/Blog';
import Info from './components/common/Info';


const theme = createMuiTheme({
  palette: {
    primary: blue
  },
  typography: {

  }
});

const pages = {
  monthlyCalendar: {
    title: 'Monthly Calendar',
    features: [
      'Dynamic calendar change based off the selected month',
      'Conditional formatting rules for each month',
      'Printer friendly'
    ],
    body: 'The Monthly Calendar tool provides a simple and effective way to create both digital and printable monthly calendars.',
    picture1: require ('./assets/MonthlyCalendar/monthlyCalendar1.png'),
    picture2: require ('./assets/MonthlyCalendar/monthlyCalendar2.PNG'),
    picture3: require ('./assets/MonthlyCalendar/monthlyCalendar3.PNG'),
    dlRoute: 'http://drive.google.com/uc?export=download&id=1B0VMyAmLbXzrDMiEHnriyni_M6YuWjqz',
    exampleRoute: '',
    docxRoute: 'http://drive.google.com/uc?export=download&id=1HpqrmG93R8PiPCY9hAbwXtZQEZ3-APIB',
    pdfRoute: 'http://drive.google.com/uc?export=download&id=1bmNcM_M6or4myA5NJ5L_1w8nBCKEXN4U',
  },
  simpleTracker: {
    title: 'Simple Tracker',
    features: [
      'Dynamic charts that update immediatly when information changes',
      'Track anything; Chores, Tasks, or even Exercise',
      'Tasks are automatically formatted once completed to provide an easy visual que'
    ],
    body: 'The Simple Tracker tool allows users to track a wide variety of things while showing relevant information on completed tasks.',
    picture1: require ('./assets/SimpleTracker/simpleTracker1.PNG'),
    picture2: require ('./assets/SimpleTracker/simpleTracker2.PNG'),
    picture3: require ('./assets/SimpleTracker/simpleTracker3.PNG'),
    dlRoute: 'http://drive.google.com/uc?export=download&id=1T3B3JB4tk5j8MFc4dtwLClk9FVbAZ5Mw',
    exampleRoute: 'http://drive.google.com/uc?export=download&id=1KtWK0U2_gb7DVrE0Yp95RB4Gz5S6alY1',
    docxRoute: 'http://drive.google.com/uc?export=download&id=1AvjZ1KDP_gG-RSmu8wFXOdL3ffbSRPXo',
    pdfRoute: 'http://drive.google.com/uc?export=download&id=1gxIKVAHBT-flE2222KbHBJhJ53YjM_uI',
  },
  recipeBook: {
    title: 'Recipe Book',
    features: [
      'Track all of your commonly bought foods using the Foods table',
      'Review your favorie recipes in the Recipe List and categorize them by meal type or style',
      'Add instructions to your recipes so they can be easily shared with your friends and family',
      'Dynamic serving sizes for each ingredient that uses volumes (tsp, tbsp, cups)',
      'Table items are automatically sorted when a header field is clicked'
    ],
    body: 'The Recipe Book tool allows users to easily keep track of their favorite recipes while providing insight into total calories as well as cost.',
    picture1: require ('./assets/RecipeBook/recipeBook1.PNG'),
    picture2: require ('./assets/RecipeBook/recipeBook2.PNG'),
    picture3: require ('./assets/RecipeBook/recipeBook3.PNG'),
    dlRoute: 'http://drive.google.com/uc?export=download&id=1xLnf02Erv45PwWUa4LEqXCg1qWywtKT_',
    exampleRoute: 'http://drive.google.com/uc?export=download&id=110Gb1Nbz5hbkfmSbysALDUOnDSoeLh3R',
    docxRoute: 'http://drive.google.com/uc?export=download&id=1vKeasrAVosypaGb8i6rBp-reOyj7XvbV',
    pdfRoute: 'http://drive.google.com/uc?export=download&id=1oCMXwjLwdX6O1hlfWBGwxHjT_A6stGU6',
  },
  mealBudgeter: {
    title: 'Meal Budgeter',
    features: [
      'Search and filter fields using the search bar on each tab',
      'Easily add, edit, or delete foods, meals, and meal plans',
      'View cost information for each ingredient of created meals',
    ],
    body: 'The Meal Budgeter tool allows users to create meals and meal plans that fall within their budget.',
    picture1: require ('./assets/MealBudgeter/mealBudgeter1.PNG'),
    picture2: require ('./assets/MealBudgeter/mealBudgeter2.PNG'),
    picture3: require ('./assets/MealBudgeter/mealBudgeter3.PNG'),
    dlRoute: 'http://drive.google.com/uc?export=download&id=1sdN1G-Mfl2S_hqF_oM9JtZAAkt1MqPKW',
    exampleRoute: '',
    docxRoute: 'http://drive.google.com/uc?export=download&id=1xJsrz06R8OHx6bWZuR2b93VZ_MptVenu',
    pdfRoute: 'http://drive.google.com/uc?export=download&id=1xkZ5LfIw4FK88IZjZx0ppqBs-uJb3V2Z',
  },
  financialObjective: {
    title: 'Financial Objective',
    features: [
      'The Budget Generator allows users to create budgets by year, month, and even weekly',
      'The Parser will parse non uniform data, find duplicate transactions, and automatically categorize familiar transactions',
      'The Identifier allows users to easily categorize transactions through the use of dynamic drop-downs',
      'The Dashboard provides a summary of current spending as well as expected savings.'
    ],
    body: 'The Financial Objective tool allows users to stay on top of their finances by providing insight into current spending as well as future expectations.',
    picture1: require ('./assets/FinancialObjective/financialObjective1.PNG'),
    picture2: require ('./assets/FinancialObjective/financialObjective2.PNG'),
    picture3: require ('./assets/FinancialObjective/financialObjective3.PNG'),
    dlRoute: '',
    exampleRoute: '',
    docxRoute: 'http://drive.google.com/uc?export=download&id=1RbbXbRbcr7fvP_uOVLz0G7mXRmgW3tSS',
    pdfRoute: 'http://drive.google.com/uc?export=download&id=1Ez_9eG47H1Pmi-Ih_HuheX3Xf2xWFcwE',
  },
  taskAdvantage: {
    title: 'Task Advantage',
    features: [
      'Easily manage and view tasks by grouping by category and/or project',
      'Review all scheduled tasks within the task Calendar',
      'Create a weekly schedule with blocks of time dedicated to each category',
      'Create recurring tasks by day, week, month, or year',
      'Track time spent on each task by "working" them',
      'View task completion rate, actual vs goal, and time expenditures using the dashboard.'
    ],
    body: 'Task Advantage is a complete project management tool kit and task tracker.',
    picture1: require ('./assets/TaskAdvantage/taskAdvantage1.PNG'),
    picture2: require ('./assets/TaskAdvantage/taskAdvantage2.PNG'),
    picture3: require ('./assets/TaskAdvantage/taskAdvantage3.PNG'),
    dlRoute: '',
    exampleRoute: '',
    docxRoute: 'http://drive.google.com/uc?export=download&id=1jg3mDrR82aPUS15o5qe16ozd2EIDeJx-',
    pdfRoute: 'http://drive.google.com/uc?export=download&id=1IqD4mvtQgKSwOIbbpqXoUVorW68YI-tt',
  },
}

function App() {
  return (
    <Router>
      <div className="App">
        <ThemeProvider theme={theme}>
          <Route exact path="/" render={() => (
            <Main />
          )} />
          <Route path="/home" component={Main} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/terms" component={Terms} />
          <Route
            path='/monthlyCalendar'
            render={() => <Info info={pages.monthlyCalendar} />}
          />
          <Route
            path='/simpleTracker'
            render={() => <Info info={pages.simpleTracker} />}
          />
          <Route
            path='/mealBudgeter'
            render={() => <Info info={pages.mealBudgeter} />}
          />
          <Route
            path='/recipeBook'
            render={() => <Info info={pages.recipeBook} />}
          />
          <Route
            path='/taskAdvantage'
            render={() => <Info info={pages.taskAdvantage} />}
          />
          <Route
            path='/financialObjective'
            render={() => <Info info={pages.financialObjective} />}
          />
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
