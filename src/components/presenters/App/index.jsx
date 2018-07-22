import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createPalette from 'material-ui/styles/createPalette';
import createMuiTheme from 'material-ui/styles/createMuiTheme';
import {blue, grey, red} from 'material-ui/colors';
import Grid from 'material-ui/Grid';
import { Provider } from 'react-redux';
import AppFooter from '../AppFooter';
import AppHeader from '../AppHeader';
import ProductsWrapperContainer from '../../containers/ProductsWrapper';
import store from '../../../store';
import './styles.css';

const muiTheme = createMuiTheme({
    palette: createPalette({
      primary: grey,
      accent: blue,
      error: red,
      type: 'light'
    })
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
