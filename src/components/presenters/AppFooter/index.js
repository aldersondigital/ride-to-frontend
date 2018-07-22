/* eslint no-unused-vars:off */

import React from 'react';
import BottomNavigation from 'material-ui/BottomNavigation';
import './styles.css';

const AppFooter = () => {
  return (
    <section className="AppFooter">
      <BottomNavigation
        showLabels
        className="AppFooter-navigation"
      >
      </BottomNavigation>
    </section>
  );
};

export default AppFooter;
