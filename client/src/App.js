import React, { Fragment, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './components/Home';
import { Container } from 'semantic-ui-react';

const App = () => (
  <Fragment>
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Container>
  </Fragment>
);

export default App;
