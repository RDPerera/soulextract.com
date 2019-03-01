import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { withStyles } from '../tools';
import { Template } from '../components';

const styles = theme => ({
  root: {
    display: 'block'
  }
});

class Music extends React.Component {
  static propTypes = {
    classes: PropTypes.object
  };

  render () {
    const { classes } = this.props;

    return (
      <Template>
        <div className={classes.root}>
          <h1>Music</h1>
          <Link to='/'>Home</Link>
        </div>
      </Template>
    );
  }
}

export default withStyles(styles)(Music);
