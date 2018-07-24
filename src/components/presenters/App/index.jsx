import React from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';
import Grid from '@material-ui/core/Grid';
import { Provider } from 'react-redux';
import AppFooter from '../AppFooter';
import AppHeader from '../AppHeader';
import ProductsWrapperContainer from '../../containers/ProductsWrapper';
import store from '../../../store';
import './styles.css';

const muiTheme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: {
      main: '#f44336',
    },
  }
});

const App = () => {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={muiTheme}>
        <section className="App">
           <Grid container spacing={24} justify="center">
            <AppHeader />
            <ProductsWrapperContainer />
            <AppFooter />
          </Grid>
        </section>
      </MuiThemeProvider>
    </Provider>
  );
};

export default App;
