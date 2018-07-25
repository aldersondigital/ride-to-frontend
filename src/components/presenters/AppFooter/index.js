/* eslint no-unused-vars:off */

import React from 'react';
import BottomNavigation from 'material-ui/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import './styles.css';

const AppFooter = () => {
  return (
    <section className="AppFooter">
      <BottomNavigation
        showLabels
        className="AppFooter-navigation"
      >
          <BottomNavigationAction label="Email" />
          <BottomNavigationAction label="API repo" />
          <BottomNavigationAction label="Frontend repo" />
      </BottomNavigation>
    </section>
  );
};

export default AppFooter;
