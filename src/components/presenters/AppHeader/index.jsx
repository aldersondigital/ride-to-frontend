import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from '@material-ui/core/Typography';
import styles from './styles.css';

const AppHeader = () => {
  return (
    <div className="AppHeader">
       <AppBar position="static" color="default" className="AppHeadr-app-bar">
        <Typography type="title" color="default" className="AppHeader-title">
          <strong>RideTo:</strong> Test solution by Joe Strachan 
        </Typography>
       </AppBar>
    </div>
  );
};

export default AppHeader;
