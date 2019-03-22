import React from 'react';
import { NavLink, } from 'react-router-dom';
import { Menu, Segment, } from 'semantic-ui-react';

const Navbar = () => (
  <Segment inverted>
    <Menu>
      <Menu.Item>
        <NavLink exact to="/" activeStyle={styles.active}>
          Home
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to="/About" activeStyle={styles.active}>
          About
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to="/departments" activeStyle={styles.active}>
          Store Departments
        </NavLink>
      </Menu.Item>
    </Menu>
  </Segment>
)

const styles = {
  active: {
    color: 'orange',
    fontWeight: 'bold',
  }
}

export default Navbar;