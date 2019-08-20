import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {hot} from 'react-hot-loader/root';
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import reset from 'styled-reset';
import Router from '../routers/components/Router';
import history from '../routers/history';
import routes from '../routers/routes';
import {AppProvider} from '../providers';
import {theme} from '../theme';
import Wrapper from '../views/shared/Wrapper';
import Loading from '../views/shared/Loading';

const GlobalStyle = createGlobalStyle`${reset}`;

const App = hot(() => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Wrapper>
          <Router routes={routes} history={history} fallback={<Loading />} />
        </Wrapper>
      </AppProvider>
    </ThemeProvider>
  </>
));

ReactDOM.render(<App />, document.querySelector('[data-react-app]'));
