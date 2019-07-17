import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Header from './Header';

const styles = () => ({
  root: {
    flexGrow: 1,
  },
});

 class Info extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
          <div>
            {this.props.text}
          </div>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(Info);