import React, { Fragment, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './components/Home';
import { Container } from 'semantic-ui-react';
import Navbar from './components/Navbar';
import DepartView from './components/DepartView';
import DepartsForm from './components/DepartsForm';
import Departments from './components/Departments';
import ItemView from './components/ItemView';
import ItemsForm from './components/ItemsForm';
import About from './components/About';
import Item from './components/Item';
import NoMatch from "./components/NoMatch";

const App = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/departments" component={Departments} />
        <Route exact path="/departments/new" component={DepartsForm} />
        <Route exact path="/departments/:id/edit" component={DepartsForm} />
        <Route exact path="/departments/:department_id/items/new" component={ItemsForm} />
        <Route exact path="/departments/:department_id/items/:id" component={Item} />
        <Route exact path="/departments/:department_id/items/:id/edit" component={ItemsForm} />
        <Route exact path="/departments/:department_id/items" component={ItemView} />
        <Route exact path="/departments/:id" component={DepartView} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
);

export default App;
