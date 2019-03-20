import React, { Fragment, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './components/Home';
import { Container } from 'semantic-ui-react';
import Navbar from './components/Navbar';
import DepartView from './components/DepartView';
import DepartsForm from './components/DepartsForm';
import Departments from './components/Departments';

const App = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/departments" component={Departments} />
        <Route exact path="/departments/new" component={DepartsForm} />
        <Route exact path="/departments/:id" component={DepartView} />
      </Switch>
    </Container>
  </Fragment>
);

export default App;
