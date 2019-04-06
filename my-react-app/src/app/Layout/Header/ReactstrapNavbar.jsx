import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../../utils/images/logo.png';
import { MenuItem } from './MenuItem';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav } from 'reactstrap';

var links = [
	{
		name: "Main",
		path: '#Main'
	},
	{
		name: "About",
		path: '#About'
	},
	{
		name: "Contacts",
		path: '#Contacts'
	}
];

export class ReactstrapNavbar extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.toggle = this.toggle.bind(this);
  //   this.state = {
  //     isOpen: false
  //   };
  // }
  // toggle() {
  //   this.setState({
  //     isOpen: !this.state.isOpen
  //   });
  // }
  
  state = {
    isOpen: false,
    isClosed: false
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen});
  }


  render() {
    return (
      <div>
        <Navbar color="info" light expand="md">
          <div className='container'>
          <NavbarBrand href="/"><img src={logo} alt="logo"/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
			          { links.map(
                  function(item, id){
                    return <MenuItem item={item} key={id} />
                  }               
                )}

            </Nav>
          </Collapse>
          </div>
        </Navbar>
      </div>
    );
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