import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import './styles.css';

export default () => {
  return (
    <section className="AppHeader">
       <AppBar position="static">
         <Toolbar>
          <IconButton className="AppHeader-button" color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" className="AppHeader-title">
            RideTo Product Test
          </Typography>
        </Toolbar>
       </AppBar>
    </section>
  );
};
