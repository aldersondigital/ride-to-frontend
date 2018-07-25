import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1,
  },
};

const AppHeader = () => {
  return (
    <div className="AppHeader">
       <AppBar position="static" color="default">
         <Toolbar>
          <Typography type="title" color="default" className="AppHeader-title">
            RideTo: Test solution by Joe Strachan
          </Typography>
        </Toolbar>
       </AppBar>
    </div>
  );
};

export default withStyles(styles)(AppHeader);
