import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import logo from '../../../utils/images/logo.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  Container
} from 'reactstrap';

var links = ["Main", "About", "Contacts"];

export class Header extends React.Component {

  state = {
    isOpen: false,
    isClosed: false
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return <header className="header">
        <Navbar color="info" light expand="md">
          <Container>
            <NavbarBrand href="/"><img src={logo} alt="logo" /></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                {links.map(item => <NavItem key={item}>
                  <NavLink> {item} </NavLink>
                </NavItem>)}
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
    </header>
  }
}

Navbar.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}