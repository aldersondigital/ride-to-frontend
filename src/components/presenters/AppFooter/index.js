/* eslint no-unused-vars:off */

import React from 'react';
import BottomNavigation from 'material-ui/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import EmailIcon from '@material-ui/icons/Email';
import CodeIcon from '@material-ui/icons/Code';
import './styles.css';

const AppFooter = () => {
  return (
    <section className="AppFooter">
      <BottomNavigation
        showLabels
        className="AppFooter-navigation"
      >
        <BottomNavigationAction label="Email" icon={ <EmailIcon /> } />
        <BottomNavigationAction label="API repo" icon={ <CodeIcon /> } />
        <BottomNavigationAction label="Frontend repo" icon={ <CodeIcon /> } />
      </BottomNavigation>
    </section>
  );
};

export default AppFooter;
