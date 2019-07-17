import React from 'react';
import Main from './components/main/Main';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from "@material-ui/core";
import { blue } from '@material-ui/core/colors';
import { pink } from '@material-ui/core/colors';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from './components/main/About';
import Info from './components/common/Info';

const theme = createMuiTheme({
  palette: {
    primary: blue
  },
  typography: {

  }
});

function App() {
  return (
    <Router>
      <div className="App">
        <ThemeProvider theme={theme}>
          <Route exact path="/" render={() => (
            <Main />
          )} />
          <Route path="/about" component={About} />
          <Route
            path='/monthlyCalendar'
            render={() => <Info text={"test"} />}
          />
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
