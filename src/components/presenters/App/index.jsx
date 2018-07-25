import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';

import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import AppFooter from '../AppFooter';
import AppHeader from '../AppHeader';
import ProductWrapper from '..//ProductWrapper';
import ProductsWrapperContainer from '../../containers/ProductsWrapper';
import store from '../../../store';
import styles from './styles.css';

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#fafafa'
    },
    secondary: {
      main: '#f44336',
    },
  }
});

const App = () => {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={muiTheme}>
        <Router>
          <section className="App">
            <AppHeader />
            <Route exact path="/" component={ ProductsWrapperContainer } />
            <Route path="/product/:productId" component={ ProductWrapper } />
            <AppFooter />
          </section>
        </Router>
      </MuiThemeProvider>
    </Provider>
  );
};

export default App;
