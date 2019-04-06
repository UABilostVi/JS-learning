import React from 'react';
import PropTypes from 'prop-types';
import {
	NavItem,
	NavLink } from 'reactstrap';


export class MenuItem extends React.Component {
	render(){
		return <NavItem>
			<NavLink href={this.props.item.path}>{this.props.item.name}</NavLink>
		</NavItem>
	}
}

MenuItem.propTypes = {
	item: PropTypes.object
};