import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import logo from '../../../utils/images/logo.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Container
} from 'reactstrap';
import {Link} from "react-router-dom";

var links = [
  { title: "Main", url: "/" },
  { title: "About", url: "/about" },
  { title: "Contacts", url: "/contacts" }
];

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
              <Link to="/" className='logo navbar-brand'>
                <img src={logo} alt="logo"/>
              </Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                {links.map(item => (
                <NavItem key={item.url}>
                  <Link to={item.url} className='nav-link'>
                    {item.title}
                  </Link>
                </NavItem>
                ))}
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