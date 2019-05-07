import React from 'react';
import PropTypes from 'prop-types';

export class Accordeon extends React.Component {
	render() {
		const { title, list, isOpen, onClick } = this.props;
		return (
			<div onClick={onClick}>
				{title}
			</div>
		);
	}
} 

Accordeon.propTypes = {
	title: PropTypes.string,
	list: PropTypes.array,
	isOpen: PropTypes.bool,
	onClick: PropTypes.func
}